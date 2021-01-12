import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FormattingService {
  constructor() {}

  /**
   * Replaces spaces with underscores from on incoming array
   *
   * @param {string[]} data The array to process
   * @returns {string[]} The proccessed array
   */
  arrayReplaceSpacesWithUnderscores(data: string[]): string[] {
    let result: string[] = [];

    data.forEach((element) => {
      result.push(element.replace(" ", "_"));
    });
    return result;
  }

  /**
   * Replaces spaces with underscores from on string
   *
   * @param {string} data The string to process
   * @returns {string} The proccessed string
   */
  replaceUnderscoresWithSpaces(data: string): string {
    return data.replace("_", " ");
  }
}
