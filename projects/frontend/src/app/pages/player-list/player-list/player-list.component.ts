import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";

import { Player, players } from "../player-list.data";

@Component({
  selector: "pldb-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureListComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  players: Player[] = players;

  ngOnInit() {}
}
