import { Store, select } from "@ngrx/store";
import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";
import { Observable } from "rxjs";

import { routeAnimations, selectIsAuthenticated } from "../../../core/core.module";

import { State } from "../examples.state";

@Component({
  selector: "pldb-examples",
  templateUrl: "./examples.component.html",
  styleUrls: ["./examples.component.scss"],
  animations: [routeAnimations],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ExamplesComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;

  examples = [
    { link: "todos", label: "pldb.examples.menu.todos" },
    { link: "stock-market", label: "pldb.examples.menu.stocks" },
    { link: "theming", label: "pldb.examples.menu.theming" },
    { link: "crud", label: "pldb.examples.menu.crud" },
    {
      link: "simple-state-management",
      label: "pldb.examples.menu.simple-state-management"
    },
    { link: "form", label: "pldb.examples.menu.form" },
    { link: "notifications", label: "pldb.examples.menu.notifications" },
    { link: "elements", label: "pldb.examples.menu.elements" },
    { link: "authenticated", label: "pldb.examples.menu.auth", auth: true }
  ];

  constructor(private store: Store<State>) {}

  ngOnInit(): void {
    this.isAuthenticated$ = this.store.pipe(select(selectIsAuthenticated));
  }
}
