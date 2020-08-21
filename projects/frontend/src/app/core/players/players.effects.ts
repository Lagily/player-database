import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ofType, createEffect, Actions } from "@ngrx/effects";
import { tap, map } from "rxjs/operators";

import { LocalStorageService } from "../local-storage/local-storage.service";
import { fetchPlayers, setPlayers } from './players.action';
import { players } from '../../pages/player-list/player-list.data';

export const AUTH_KEY = "AUTH";

@Injectable()
export class PlayersEffects {
  constructor(private actions$: Actions, private localStorageService: LocalStorageService, private router: Router) {}

  fetch = createEffect(
    () =>
      this.actions$.pipe(
        ofType(fetchPlayers),
        map((tst) => {
          console.log("inside map", tst);
          return setPlayers({players})
        })
      )
  );
}
