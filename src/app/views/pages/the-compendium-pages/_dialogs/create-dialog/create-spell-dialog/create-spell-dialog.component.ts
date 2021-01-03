import { Component, OnInit } from "@angular/core";
// 5E Resources
import { FIFTH_EDITION_RESOURCES } from "src/environments/app-secrets";
// FormBuilder
import { FormGroup, Validators, FormBuilder } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
// Services
import { HomebrewSpellsService } from "../../../../../../core/resources/_services/homebrew-services/homebrew-spells.service";
// MatChipInput
import { MatChipInputEvent } from "@angular/material/chips";
import { COMMA, ENTER } from "@angular/cdk/keycodes";

export interface DnD_Class {
  name: string;
}

@Component({
  selector: "kt-create-spell-dialog",
  templateUrl: "./create-spell-dialog.component.html",
  styleUrls: ["./create-spell-dialog.component.scss"],
})
export class CreateSpellDialogComponent implements OnInit {
  // Flag for submission
  isSubmitted: boolean = false;

  // The form
  form: FormGroup;

  // 5E Resources
  // todo - Query 5E API to get the below metadata to allow DMs to create weapons with up-to-date
  // todo - options.
  RARITIES = FIFTH_EDITION_RESOURCES.GENERAL.RARITIES;
  SPELL_COMPONENTS = FIFTH_EDITION_RESOURCES.SPELLS.SPELL_COMPONENTS;

  // * MatChipInput
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  spell_classes: DnD_Class[] = [];

  constructor(
    public dialogRef: MatDialogRef<CreateSpellDialogComponent>,
    private fb: FormBuilder,
    private apiService: HomebrewSpellsService
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
        level: [""],
        range: [""],
        casting_time: [""],
        duration: [""],
        is_attack_spell: [false],
        concentration: [false],
        ritual: [false],
        damage_type: [""],
        attack_type: [""],
        school: [""],
        classes: [""],
        spellComponents: this.fb.group({
          spellComponent_V: [false],
          spellComponent_S: [false],
          spellComponent_M: [false],
          material: [""],
        }),
      }),
      description: [""],
      higher_level: [""],
    });
  }

  /**
   * Saves the form to the database.
   */
  saveForm(): void {
    let formValues: any = this.form.value;

    let generalInformation: any = this.form.value.generalInformation;
    let components: any = this.form.value.generalInformation.spellComponents;

    // Prepare payload to POST.
    let payload: any = {
      name: generalInformation.name,
      desc: [formValues.description],
      higher_level: [formValues.higher_level],
      range: generalInformation.range,
      components: this.getElementsArray(components),
      material: generalInformation.material,
      ritual: generalInformation.ritual,
      duration: generalInformation.duration,
      concentration: generalInformation.concentration,
      casting_time: generalInformation.casting_time,
      level: generalInformation.level,
      attack_type: generalInformation.attack_type,
      damage: {
        damage_type: {
          name: generalInformation.damage_type,
        },
      },
      school: {
        name: generalInformation.school,
      },
      classes: this.spell_classes,
    };

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
   * Results a string representation of Classes that can cast the Homebrew Spell.
   *
   * @param {*} array The array to process.
   * @returns {string[]}  An array of classes.
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
   * Adds a chip to the MatChip
   *
   * @param {MatChipInputEvent} event Input event
   */
  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our DnD Class
    if ((value || "").trim()) {
      this.spell_classes.push({ name: value.trim() });
    }

    // Reset the input value
    if (input) {
      input.value = "";
    }
  }

  /**
   * Removes a chip from the MatChip
   *
   * @param {DnD_Class} element The element to remove.
   */
  remove(element: DnD_Class): void {
    const index = this.spell_classes.indexOf(element);

    if (index >= 0) {
      this.spell_classes.splice(index, 1);
    }
  }
}
