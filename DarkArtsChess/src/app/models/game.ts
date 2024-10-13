import { Player } from './player';
import { Move } from './move';
export interface Game {
  id: number;
  player1: Player;
  player2: Player;
  moves: Move[];
}
