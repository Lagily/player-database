import { createReducer, on, Action } from "@ngrx/store";
import { setPlayers } from './players.action';
import { PlayersState } from './players.models';

export const initialState: PlayersState = {
  players: []
};

const reducer = createReducer(
  initialState,
  on(setPlayers, (state, props) => ({ ...props })),
);

export function playersReducer(state: PlayersState | undefined, action: Action): PlayersState {
  return reducer(state, action);
}
