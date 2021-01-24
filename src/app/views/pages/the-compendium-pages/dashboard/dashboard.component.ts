import { Component, OnInit } from "@angular/core";
// Models
import { currentUser, User } from "src/app/core/auth";
// NGRX
import { select, Store } from "@ngrx/store";
import { AppState } from "src/app/core/reducers";
import { Observable } from "rxjs";

@Component({
  selector: "kt-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  // Public Properties.
  user$: Observable<User>;

  /**
   * Creates an instance of DashboardComponent.
   * @param {Store<AppState>} store Store<AppState>
   */
  constructor(private store: Store<AppState>) {}

  /**
   * On init
   */
  ngOnInit(): void {
    this.user$ = this.store.pipe(select(currentUser));
  }
}
