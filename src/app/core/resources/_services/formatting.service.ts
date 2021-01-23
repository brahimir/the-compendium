import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class FormattingService {
  constructor() {}

  /**
   * Replaces spaces with underscores from incoming array
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
   * Replaces spaces with underscores from string
   *
   * @param {string} data The string to process
   * @returns {string} The proccessed string
   */
  replaceUnderscoresWithSpaces(data: string): string {
    return data.replace("_", " ");
  }

  /**
   * Replaces spaces with underscores from string
   *
   * @param {string} data The string to process
   * @returns {string} The proccessed string
   */
  replaceSpacesWithDashes(data: string): string {
    return data.replace(" ", "-");
  }

  /**
   * Lowercases first letter in a strng.
   *
   * @param {*} string The string to format.
   * @returns The formatted string.
   */
  lowercaseFirstLetter(data: string) {
    return data.charAt(0).toLowerCase() + data.slice(1);
  }

  /**
   * Capitalizes first letter in a strng.
   *
   * @param {*} string The string to format.
   * @returns The formatted string.
   */
  capitalizeFirstLetter(data: string) {
    return data.charAt(0).toUpperCase() + data.slice(1);
  }

  /**
   * Lowercases each word in a string.
   *
   * @param {string} data The string to format.
   * @returns The fotmatted string.
   */
  lowercaseAllLetters(data: string) {
    let splitStr = data.toLowerCase().split(" ");

    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toLowerCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }

  /**
   * Uppercases each letter in a string.
   *
   * @param {string} data The string to format.
   * @returns The fotmatted string.
   */
  uppercaseAllLetters(data: string) {
    let splitStr = data.toUpperCase().split(" ");

    for (let i = 0; i < splitStr.length; i++) {
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(" ");
  }

  /**
   * Titlecases every word in a string.
   *
   * @param {string} data The string to format.
   * @returns The formatted string.
   */
  titleCase(data: string) {
    var splitStr = data.toLowerCase().split(" ");
    for (var i = 0; i < splitStr.length; i++) {
      // You do not need to check if i is larger than splitStr length, as your for does that for you
      // Assign it back to the array
      splitStr[i] =
        splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(" ");
  }
}
