import { createReducer, on } from '@ngrx/store';
import { Game } from '../../models/game';
import { Move } from '../../models/move';
import * as GameActions from './game.actions';

export interface GameState {
  game: Game | null;
  error: string | null;
}

export const initialState: GameState = {
  game: null,
  error: null,
};

export const gameReducer = createReducer(
  initialState,
  on(GameActions.loadGameSuccess, (state, { game }) => ({
    ...state,
    game,
    error: null,
  })),
  on(GameActions.loadGameFailure, (state, { error }) => ({
    ...state,
    game: null,
    error,
  })),
  on(GameActions.addMoveSuccess, (state, { move }) => {
    const updatedMoves = [...(state.game?.moves ?? []), move];
    return {
      ...state,
      game: state.game ? { ...state.game, moves: updatedMoves } : null,
    };
  })
);
