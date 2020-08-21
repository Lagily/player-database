import { createSelector } from "@ngrx/store";
import { selectPlayersState } from '../core.state';

export const selectPlayers = createSelector(selectPlayersState, (state) => state.players);
