import { createAction, props } from "@ngrx/store";
import { Player } from '../../pages/player-list/player-list.data';

export const fetchPlayers = createAction("[Players] Fetch");
export const setPlayers = createAction("[Players] Set", props<{ players: Player[] }>());
