import { createSelector, createFeatureSelector } from '@ngrx/store';
import { GameState } from './game.reducer';

export const selectGameState = createFeatureSelector<GameState>('gameState');

export const selectGame = createSelector(
  selectGameState,
  (state: GameState) => state.game
);

export const selectMoves = createSelector(
  selectGameState,
  (state: GameState) => state.game?.moves
);

export const selectError = createSelector(
  selectGameState,
  (state: GameState) => state.error
);
