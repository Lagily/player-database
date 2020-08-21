import { Component, OnInit, ChangeDetectionStrategy } from "@angular/core";

import { ROUTE_ANIMATIONS_ELEMENTS } from "../../../core/core.module";

import { Player, players } from "../player-list.data";
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectPlayers } from '../../../core/players/players.selectors';
import { fetchPlayers } from '../../../core/players/players.action';

@Component({
  selector: "pldb-player-list",
  templateUrl: "./player-list.component.html",
  styleUrls: ["./player-list.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeatureListComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  players$: Observable<Player[]>;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(fetchPlayers());
    this.players$ = this.store.pipe(select(selectPlayers));
  }
}
