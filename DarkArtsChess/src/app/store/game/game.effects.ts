import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as GameActions from './game.actions';
import { ChessGameService as GameService } from '../../services/ChessGameService/chess-game-service.service.ts'; // Assumed service that fetches game data

@Injectable()
export class GameEffects {
  loadGame$ = createEffect(() =>
    this.actions$.pipe(
      ofType(GameActions.loadGame),
      mergeMap((action) =>
        this.gameService.getGameById(action.gameId).pipe(
          map((game) => GameActions.loadGameSuccess({ game })),
          catchError((error) => of(GameActions.loadGameFailure({ error })))
        )
      )
    )
  );

  constructor(private actions$: Actions, private gameService: GameService) {}
}
