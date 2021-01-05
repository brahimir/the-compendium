import { Component, OnInit } from "@angular/core";
// 5E Resources
import { FIFTH_EDITION_RESOURCES } from "src/environments/app-secrets";
// FormBuilder
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
// Services
import { HomebrewNpcsService } from "../../../../../../core/resources/_services/homebrew-services/homebrew-npcs.service";
// MatChipInput
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";

@Component({
  selector: "kt-create-npc-dialog",
  templateUrl: "./create-npc-dialog.component.html",
  styleUrls: ["./create-npc-dialog.component.scss"],
})
export class CreateNpcDialogComponent implements OnInit {
  // Public properties
  form: FormGroup;
  hasFormErrors = false;
  isSubmitted: boolean = false;
  errorMessage: string =
    "Oops! We encountered an error; please check all required fields and try submitting again.";

  // MatChip properties
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];

  // 5E Resources
  DICE = FIFTH_EDITION_RESOURCES.GENERAL.DICE;
  SIZES = FIFTH_EDITION_RESOURCES.GENERAL.SIZES;
  MOVEMENTS = FIFTH_EDITION_RESOURCES.GENERAL.MOVEMENTS;
  SENSES = FIFTH_EDITION_RESOURCES.GENERAL.SENSES;

  // * Npc metadata
  // General
  senses: string[] = [];
  proficiencies: string[] = [];
  // Resistances & Vunerabilities
  damage_vulnerabilities: string[] = [];
  damage_resistances: string[] = [];
  damage_immunities: string[] = [];
  condition_immunities: any[] = [];
  // Combat
  special_abilities: any = [];
  actions: any = [];
  legendary_actions: any = [];

  constructor(
    public dialogRef: MatDialogRef<CreateNpcDialogComponent>,
    private fb: FormBuilder,
    private apiService: HomebrewNpcsService
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  /**
   * Initializes the from.
   */
  initForm(): void {
    this.form = this.fb.group({
      generalInformation: this.fb.group({
        name: ["", Validators.required],
        size: [""],
        type: [""],
        subtype: [""],
        alignment: [""],
        armor_class: [""],
        hit_points: [""],
        hit_dice_number: [""],
        hit_dice_die: [""],
        languages: [""],
        challenge_rating: [""],
        proficiencies: [""],
        xp: [""],
      }),
      speed: this.fb.group({
        speed_Walk: [""],
        speed_Fly: [""],
        speed_Swim: [""],
      }),
      abilityScores: this.fb.group({
        ability_scores_STR: [10],
        ability_scores_DEX: [10],
        ability_scores_CON: [10],
        ability_scores_INT: [10],
        ability_scores_WIS: [10],
        ability_scores_CHA: [10],
      }),
      resistancesAndVulnerabilities: this.fb.group({
        damage_vulnerabilities: [""],
        damage_resistances: [""],
        damage_immunities: [""],
        condition_immunities: [""],
      }),
      senses: this.fb.group({
        senses_Blindsight: [""],
        senses_Darkvision: [""],
        senses_Tremorsense: [""],
        senses_Passive_Perception: [""],
      }),
      abilities: this.fb.group({
        abilities_special_abilities: this.special_abilities,
        abilities_actions: this.actions,
        abilities_legendary_actions: this.legendary_actions,
      }),
    });
  }

  /**
   * On Submit.
   */
  onSubmit(): void {
    this.hasFormErrors = false;
    const controls = this.form.controls;

    // Check form for errors.
    if (this.form.invalid) {
      Object.keys(controls).forEach((controlName) =>
        controls[controlName].markAsTouched()
      );

      this.hasFormErrors = true;
      return;
    }

    // Proceed with submitting form.
    let formValues: any = this.form.value;
    let generalInformation: any = this.form.value.generalInformation;

    // Prepare payload to POST.
    let payload: any = {};

    this.apiService.create(payload).subscribe(
      (res) => {
        this.isSubmitted = true;
        this.dialogRef.close({ isisSubmitted: this.isSubmitted });
      },
      (err) => {
        this.dialogRef.close({ isisSubmitted: this.isSubmitted });
        console.log(err);
      }
    );
  }

  /**
   * Returns a string representation of similar Object properties in an array.
   *
   * @param {*} array The array to process.
   * @returns {string[]} The processed array.
   */
  getElementsArray(array: any): string[] {
    let results: string[] = [];

    for (let element in array) {
      if (array[element]) {
        let elementName: string;
        elementName = element.split("_")[1];

        results.push(elementName);
      }
    }

    return results;
  }

  /**
   * Adds the chip to the local array.
   *
   * @param {MatChipInputEvent} event Input event
   */
  add(event: MatChipInputEvent, arrayName: string): void {
    const input = event.input;
    const value = event.value;

    // Add our element
    if ((value || "").trim()) {
      switch (arrayName) {
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

  /** Alect Close event */
  onAlertClose($event) {
    this.hasFormErrors = false;
  }
}
