import { createAction, props } from '@ngrx/store';
import { Game } from '../../models/game';
import {  Move } from '../../models/move';

export const loadGame = createAction(
  '[Game] Load Game',
  props<{ gameId: number }>()
);

export const loadGameSuccess = createAction(
  '[Game] Load Game Success',
  props<{ game: Game }>()
);

export const loadGameFailure = createAction(
  '[Game] Load Game Failure',
  props<{ error: any }>()
);

export const addMove = createAction(
  '[Game] Add Move',
  props<{ move: Move }>()
);

export const addMoveSuccess = createAction(
  '[Game] Add Move Success',
  props<{ move: Move }>()
);

export const updateGameState = createAction(
  '[Game] Update Game State',
  props<{ game: Game }>()
);
