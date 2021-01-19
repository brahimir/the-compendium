import { Injectable } from "@angular/core";
// Moment.js
import * as moment from "moment";

@Injectable({
  providedIn: "root",
})
export class DateService {
  constructor() {}

  /**
   * Returns a string representation of the current date.
   *
   * @returns {string} The current date string.
   */
  getDate(format?: string): string {
    if (!format) {
      return moment().format("LLL");
    } else {
      return moment().format(format);
    }
  }

  getTime(format?: string): string {
    if (!format) {
      return moment().format("L");
    } else {
      return moment().format(format);
    }
  }

  /**
   * Returns an array containing string representations of the date and time of an
   * ISO string passed as a param.
   *
   * @param {string} iso The string to parse and convert.
   * @returns {string[]} The resulting date and time in the specified format, otherwise formatted as:
   *                     'January 19, 2021 11:18 AM' --> see https://momentjs.com/
   */
  formatISOString(iso: string, format?: string): string {
    let date = moment(iso);
    if (!format) {
      return date.utc().format("LLL");
    } else {
      return date.utc().format(format);
    }
  }
}
