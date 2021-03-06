import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
// Constants
import { CONSTANTS_CREATE_DIALOG } from "../../constants";
// 5E Resources
import { FIFTH_EDITION_RESOURCES } from "src/environments/app-secrets";
// FormBuilder
import { FormGroup, Validators, FormBuilder, FormControl, FormArray } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
// Services
import { HomebrewNpcsService } from "../../../../../../../core/resources/_services/homebrew-services/homebrew-npcs.service";
import { LayoutUtilsService, MessageType } from "src/app/core/_base/crud";
// RXJS
import { map, startWith } from "rxjs/operators";
import { Observable } from "rxjs";
// MatChipInput
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";
// MatAutocomplete
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";
import { FormattingService } from "src/app/core/resources/_services/formatting.service";

@Component({
  selector: "kt-create-npc-dialog",
  templateUrl: "./create-npc-dialog.component.html",
  styleUrls: ["./create-npc-dialog.component.scss"]
})
export class CreateNpcDialogComponent implements OnInit {
  // Public properties
  form: FormGroup;
  hasFormErrors = false;
  isSubmitted: boolean = false;
  headerTitle: string = "Create Homebrew Monster";

  // Error messages
  errorMessage: string = CONSTANTS_CREATE_DIALOG.ERRORS.MISSING_REQ_FIELDS;

  // * 5E Resources
  ALIGNMENTS = FIFTH_EDITION_RESOURCES.GENERAL.ALIGNMENTS;
  DAMAGE_TYPES = FIFTH_EDITION_RESOURCES.GENERAL.DAMAGE_TYPES;
  DICE = FIFTH_EDITION_RESOURCES.GENERAL.DICE;
  LANGUAGES = FIFTH_EDITION_RESOURCES.GENERAL.LANGUAGES.STANDARD.concat(
    FIFTH_EDITION_RESOURCES.GENERAL.LANGUAGES.EXOTIC
  );
  MOVEMENTS = FIFTH_EDITION_RESOURCES.GENERAL.MOVEMENTS;
  SIZES = FIFTH_EDITION_RESOURCES.GENERAL.SIZES;
  SENSES = FIFTH_EDITION_RESOURCES.GENERAL.SENSES;

  // * MatChip properties
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  // Languages MatChip properties
  languageCtrl = new FormControl();
  filteredLanguages: Observable<string[]>;
  // Damage MatChip properties
  damageImmunitiesCtrl = new FormControl();
  filteredDamageImmunities: Observable<string[]>;

  // * Npc metadata
  // General
  senses: string[] = [];
  speeds: any[] = [];
  languages: string[] = [];
  proficiencies: string[] = [];
  // Resistances, Immunities and Vunerabilities
  damage_vulnerabilities: string[] = [];
  damage_resistances: string[] = [];
  damage_immunities: string[] = [];
  condition_immunities: any[] = [];
  // Combat
  special_abilities: any = [];
  actions: any = [];
  legendary_actions: any = [];

  // Input references - for MatChip with MatAutocomplete
  @ViewChild("languageInput") languageInput: ElementRef;
  // @ViewChild("damageImmunities") damageImmunities: ElementRef;

  constructor(
    public dialogRef: MatDialogRef<CreateNpcDialogComponent>,
    private fb: FormBuilder,
    private apiService: HomebrewNpcsService,
    private formattingService: FormattingService,
    private layoutUtilsService: LayoutUtilsService
  ) {
    // Format resources.
    this.SENSES = this.formattingService.arrayReplaceSpacesWithUnderscores(this.SENSES);

    // Filtered languages
    this.filteredLanguages = this.languageCtrl.valueChanges.pipe(
      startWith(""),
      map((language: string | null) => (language ? this.filter(language) : this.LANGUAGES.slice()))
    );
  }

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initializes the from.
   */
  initForm(): void {
    this.form = this.fb.group({
      generalInformation: this.fb.group({
        name: [, Validators.required],
        size: [null, Validators.required],
        type: [null],
        subtype: [null],
        alignment: [null, Validators.required],
        armor_class: [null, Validators.required],
        hit_points: [null],
        hit_dice_number: [null],
        hit_dice_die: [null],
        languages: [null],
        challenge_rating: [null],
        proficiencies: [null],
        xp: [null]
      }),
      speed: this.fb.group({
        speed_Walk: [null],
        speed_Fly: [null],
        speed_Swim: [null]
      }),
      abilityScores: this.fb.group({
        ability_scores_STR: [10],
        ability_scores_DEX: [10],
        ability_scores_CON: [10],
        ability_scores_INT: [10],
        ability_scores_WIS: [10],
        ability_scores_CHA: [10]
      }),
      resistancesAndVulnerabilities: this.fb.group({
        rav_damage_vulnerabilities: [null],
        rav_damage_resistances: [null],
        rav_damage_immunities: [null],
        rav_condition_immunities: [null]
      }),
      senses: this.fb.group({
        senses_Blindsight: [null],
        senses_Darkvision: [null],
        senses_Tremorsense: [null],
        senses_Truesight: [null],
        senses_Passive_Perception: [null]
      }),
      abilitiesAndActions: this.fb.group({
        special_abilities: this.fb.array([]),
        actions: this.fb.array([]),
        legendary_actions: this.fb.array([])
      })
    });
  }

  /**
   * On Submit.
   */
  onSubmit(): void {
    this.hasFormErrors = false;
    const formGroups = this.form.controls;

    // Check form for errors.
    if (this.form.invalid) {
      // FormGroups
      Object.keys(formGroups).forEach((formgroupName) => {
        let nestedControls = formGroups[formgroupName]["controls"];

        // Nested Controls in FormGroups
        Object.keys(nestedControls).forEach((nestedControlName) => {
          nestedControls[nestedControlName].markAsTouched();
        });
      });

      this.hasFormErrors = true;
      return;
    }

    let payload = this.preparePayload();

    // Save to server.
    this.apiService.create(payload).subscribe(
      (res) => {
        this.isSubmitted = true;
        this.dialogRef.close({ isSubmitted: this.isSubmitted });

        // Show confirmation snackbar message.
        const message = "Homebrew Monster successfully added.";
        this.layoutUtilsService.showActionNotification(message, MessageType.Create, 5000, true, true);
      },
      (err) => {
        this.dialogRef.close({ isSubmitted: this.isSubmitted });

        console.log(err);
        // Show error snackbar message.
        const message = "There was a problem creating the Homebrew Monster. Please try again.";
        this.layoutUtilsService.showActionNotification(message, MessageType.Create, 5000, true, true);
      }
    );
  }

  preparePayload(): any {
    // let formValues: any = this.form.value;
    let formGeneralInformation: any = this.form.value.generalInformation;
    let formSpeed: any = this.form.value.speed;
    let formAbilityScores: any = this.form.value.abilityScores;
    let formSenses: any = this.form.value.senses;
    let formAbilitiesAndActions: any = this.form.value.abilitiesAndActions;

    // Set objects for payload.
    let payload_speeds = this.getSpeeds(formSpeed);
    let payload_senses = this.getSenses(formSenses);
    let payload_languages = this.getLanguages(this.languages);

    // Set Actions and Abilities for payload.
    let payload_special_abilities = this.checkArrayEmpty(formAbilitiesAndActions.special_abilities);
    let payload_actions = this.checkArrayEmpty(formAbilitiesAndActions.actions);
    let payload_legendary_actions = this.checkArrayEmpty(formAbilitiesAndActions.legendary_actions);

    // Prepare payload to POST.
    let payload: any = {
      // General Information
      name: formGeneralInformation.name,
      size: formGeneralInformation.size,
      type: formGeneralInformation.type,
      subtype: formGeneralInformation.subtype,
      alignment: formGeneralInformation.alignment,
      armor_class: formGeneralInformation.armor_class,
      hit_points: formGeneralInformation.hit_points,
      hit_dice: formGeneralInformation.hit_dice_number + formGeneralInformation.hit_dice_die,
      languages: payload_languages,
      proficiencies: this.proficiencies,
      challenge_rating: formGeneralInformation.challenge_rating,
      xp: formGeneralInformation.xp,

      // Speed
      speed: payload_speeds,

      // Ability Scores
      strength: formAbilityScores.ability_scores_STR,
      dexterity: formAbilityScores.ability_scores_DEX,
      constitution: formAbilityScores.ability_scores_CON,
      intelligence: formAbilityScores.ability_scores_INT,
      wisdom: formAbilityScores.ability_scores_WIS,
      charisma: formAbilityScores.ability_scores_CHA,

      // Resistances and Vulnerabilities
      damage_vulnerabilities: this.damage_vulnerabilities,
      damage_resistances: this.damage_resistances,
      damage_immunities: this.damage_immunities,
      condition_immunities: this.condition_immunities,

      // Senses
      senses: payload_senses,

      // Abilties and Actions
      special_abilities: payload_special_abilities,
      actions: payload_actions,
      legendary_actions: payload_legendary_actions
    };

    return payload;
  }

  /**
   * Initializes Special Abilities
   *
   * @returns {FormGroup} Special Abilities Form Group
   */
  initSpecialAbilities(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      desc: [null, Validators.required]
    });
  }

  /**
   * Initializes Actions
   *
   * @returns {FormGroup} Actions Form Group
   */
  initActions(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      desc: [null, Validators.required]
    });
  }

  /**
   * Initializes Legendary Actions
   *
   * @returns {FormGroup} Legendary Actions Form Group
   */
  initLegendaryActions(): FormGroup {
    return this.fb.group({
      name: [null, Validators.required],
      desc: [null, Validators.required]
    });
  }

  /**
   * Adds a new FromGroup control to the abilitiesAndActions FormArray.
   *
   * @param {string} index Which FormGroup control to add.
   */
  addActionOrAbility(index: string): void {
    if (index === "special_ability") {
      const control = <FormArray>this.form.controls.abilitiesAndActions.get("special_abilities");
      control.push(this.initSpecialAbilities());
    }
    if (index === "action") {
      const control = <FormArray>this.form.controls.abilitiesAndActions.get("actions");
      control.push(this.initActions());
    }
    if (index === "legendary_action") {
      const control = <FormArray>this.form.controls.abilitiesAndActions.get("legendary_actions");
      control.push(this.initLegendaryActions());
    }
  }

  /**
   * Removes a new FromGroup control to the abilitiesAndActions FormArray.
   *
   * @param {string} identifier Which FormGroup control to remove.
   */
  removeActionOrAbility(i: number, identifier: string): void {
    if (identifier === "special_ability") {
      const control = <FormArray>this.form.controls.abilitiesAndActions.get("special_abilities");
      control.removeAt(i);
    }

    if (identifier === "action") {
      const control = <FormArray>this.form.controls.abilitiesAndActions.get("actions");
      control.removeAt(i);
    }

    if (identifier === "legendary_action") {
      const control = <FormArray>this.form.controls.abilitiesAndActions.get("legendary_actions");
      control.removeAt(i);
    }
  }

  /**
   * Gets the senses and prepares them in Object form to fit the database schema
   *
   * @param {*} control The senses form control
   * @returns {Object} An Object of senses
   */
  getSenses(control: any): Object {
    let blindsight: number = null;
    let darkvision: number = null;
    let tremorsense: number = null;
    let passive_perception: number = null;

    if (control.senses_Blindsight) blindsight = control.senses_Blindsight;

    if (control.senses_Darkvision) darkvision = control.senses_Darkvision;

    if (control.senses_Tremorsense) tremorsense = control.senses_Tremorsense;

    if (control.senses_Passive_Perception) passive_perception = control.senses_Passive_Perception;

    if (
      blindsight === null &&
      darkvision === null &&
      tremorsense === null &&
      passive_perception === null
    )
      return null;
    else
      return {
        blindsight: blindsight,
        darkvision: darkvision,
        tremorsense: tremorsense,
        passive_perception: passive_perception
      };
  }

  /**
   * Gets the speeds and prepares them in Object form to fit the database schema
   *
   * @param {*} control The speed form control
   * @returns {Object} An Object of speeds
   */
  getSpeeds(control: any): Object {
    let walk: string = null;
    let fly: string = null;
    let swim: string = null;

    if (control.speed_Walk) {
      walk = control.speed_Walk + "ft.";
    }

    if (control.speed_Fly) {
      fly = control.speed_Fly + "ft.";
    }

    if (control.speed_Swim) {
      swim = control.speed_Swim + "ft.";
    }

    if (walk === null && fly === null && swim === null) return null;
    else
      return {
        walk: walk,
        fly: fly,
        swim: swim
      };
  }

  /**
   * Checks if the passed array is empty; returns null if it is.
   *
   * @param {string} array The array to check
   * @returns {Object} The array if not empty; null if empty.
   */
  checkArrayEmpty(array: Object[]): Object[] {
    if (array.length) return array;
    else return null;
  }

  /**
   * Gets the languages and prepares them for the payload. Returns null if the languages array is empty.
   *
   * @param {string[]} languages The languages.
   * @returns {string[]} The languages array, and null if the array is empty.
   */
  getLanguages(languages: string[]): string[] {
    if (!languages.length) return null;
    else return languages;
  }

  /**
   * Adds the chip element to the corresponding local array.
   *
   * @param {MatChipInputEvent} event Input event
   */
  add(event: MatChipInputEvent, arrayName: string): void {
    const input = event.input;
    const value = event.value;

    // Add our element
    if ((value || "").trim()) {
      switch (arrayName) {
        // General
        case "languages":
          this.languages.push(value.trim());
          break;

        // Resistances, Immunities and Vunerabilities
        case "damage_vulnerabilities":
          this.damage_vulnerabilities.push(value.trim());
          break;

        case "damage_resistances":
          this.damage_resistances.push(value.trim());
          break;

        case "damage_immunities":
          this.damage_immunities.push(value.trim());
          break;

        case "condition_immunities":
          this.condition_immunities.push({ name: value.trim() });
          break;
      }
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }

    this.languageCtrl.setValue(null);
  }

  /**
   * Removes a chip from the MatChip
   *
   * @param {string} element The element to remove
   */
  remove(element: string, arrayName: string): void {
    let index: any;
    let arrayToModify: any;

    switch (arrayName) {
      // General
      case "languages":
        index = this.languages.indexOf(element);
        arrayToModify = this.languages;
        break;

      // Resistances, Immunities and Vunerabilities
      case "damage_vulnerabilities":
        index = this.damage_vulnerabilities.indexOf(element);
        arrayToModify = this.damage_vulnerabilities;
        break;

      case "damage_resistances":
        index = this.damage_resistances.indexOf(element);
        arrayToModify = this.damage_resistances;
        break;

      case "damage_immunities":
        index = this.damage_immunities.indexOf(element);
        arrayToModify = this.damage_immunities;
        break;

      case "condition_immunities":
        index = this.condition_immunities.indexOf(element);
        arrayToModify = this.condition_immunities;
        break;
    }

    if (index >= 0) {
      arrayToModify.splice(index, 1);
    }
  }

  /**
   * MatAutocomplete filter
   *
   * @param {string} data The string to parse for
   * @returns
   */
  filter(data: string) {
    return this.LANGUAGES.filter((element) => element.toLowerCase().indexOf(data.toLowerCase()) === 0);
  }

  /**
   * Selects from the MatAutocomplete
   *
   * @param {MatAutocompleteSelectedEvent} event
   */
  selected(event: MatAutocompleteSelectedEvent): void {
    this.languages.push(event.option.viewValue);
    this.languageInput.nativeElement.value = "";
    this.languageCtrl.setValue(null);
  }

  /**
   * Alert close event
   *
   * @param {*} $event
   */
  onAlertClose($event) {
    this.hasFormErrors = false;
  }
}
