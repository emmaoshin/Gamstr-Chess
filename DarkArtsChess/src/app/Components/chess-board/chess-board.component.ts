import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  ChessPieceComponent,
  Piece,
} from '../chess-piece/chess-piece.component';

import { ChessGameService } from '../../services/ChessGameService/chess-game-service.service';
import { GameStateService } from '../../services/gamestate/game-state.service';

import {
  LoggerService,
  LogLevel,
} from '../../Utility/Logging/logger-service.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Game } from '../../models/game';
import { Move } from '../../models/move';
import { selectGame, selectMoves } from '../../store/game/game.selectors';
import { addMove, loadGame } from '../../store/game/game.actions';

@Component({
  selector: 'app-chess-board',
  standalone: true,
  providers: [ChessGameService],
  templateUrl: './chess-board.component.html',
  styleUrl: './chess-board.component.scss',
  imports: [CommonModule, ChessPieceComponent],
})
export class ChessboardComponent implements OnInit {
  chessboard: any[][] = [];
    selectedPiece: { x: number; y: number } | null = null; // Track selected piece


  constructor(
    private gameStateService: GameStateService,
    private logger: LoggerService,
    private signalRService: ChessGameService,
    private store: Store<{ game: Game }>
  ) {
    this.initializeBoard();
    this.logger.setLogLevel(LogLevel.DEBUG);
    this.logger.debug('Constructing ChessBoardComponent');
  }

ngOnInit(): void {
    this.initializeBoard();

    // Listen for incoming moves from the SignalR hub
    this.signalRService.moveReceived.subscribe((move) => {
      console.log('Move received from server:', move);
      this.updateBoard(move.fromX, move.fromY, move.toX, move.toY);
    });
  }

  initializeBoard() {
    // Set up initial pieces (for testing)
    this.chessboard = [
      [{ type: 'rook', color: 'white' }, { type: 'knight', color: 'white' }, { type: 'bishop', color: 'white' }, { type: 'queen', color: 'white' }, { type: 'king', color: 'white' }, { type: 'bishop', color: 'white' }, { type: 'knight', color: 'white' }, { type: 'rook', color: 'white' }],
      Array(8).fill({ type: 'pawn', color: 'white' }),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill(null),
      Array(8).fill({ type: 'pawn', color: 'black' }),
      [{ type: 'rook', color: 'black' }, { type: 'knight', color: 'black' }, { type: 'bishop', color: 'black' }, { type: 'queen', color: 'black' }, { type: 'king', color: 'black' }, { type: 'bishop', color: 'black' }, { type: 'knight', color: 'black' }, { type: 'rook', color: 'black' }]
    ];
  }

  // Method to handle cell click
  // onCellClick(x: number, y: number) {
  //   console.log(`Cell clicked: Row ${x}, Column ${y}`);
  //   const clickedCell = this.chessboard[x][y];

  //   // Log the clicked cell to see if it contains a piece
  //   console.log('Clicked cell content:', clickedCell);

  //   // If a piece is selected and the target cell is clicked, attempt to move
  //   if (this.selectedPiece) {
  //     console.log(`Attempting to move piece from (${this.selectedPiece.x}, ${this.selectedPiece.y}) to (${x}, ${y})`);
  //     // Send the move to the SignalR service and update the board
  //     this.makeMove(this.selectedPiece.x, this.selectedPiece.y, x, y);
  //     this.selectedPiece = null; // Deselect after the move
  //   }
  //   // If no piece is selected and the clicked cell contains a piece, select it
  //   else if (clickedCell) {
  //     console.log(`Piece selected at (${x}, ${y})`, clickedCell);
  //     this.selectedPiece = { x, y }; // Select the piece
  //   }
  // }
  onCellClick(x: number, y: number) {
  console.log(`Cell clicked: Row ${x}, Column ${y}`);
  const clickedCell = this.chessboard[x][y];

  // Log the clicked cell to see if it contains a piece
  console.log('Clicked cell content:', clickedCell);

  // If a piece is selected and the target cell is clicked, attempt to move
  if (this.selectedPiece) {
    if (this.selectedPiece.x === x && this.selectedPiece.y === y) {
      console.log('Clicked on the same cell. Move cancelled.');
      return; // Do nothing if clicking on the selected piece again
    }

    console.log(`Attempting to move piece from (${this.selectedPiece.x}, ${this.selectedPiece.y}) to (${x}, ${y})`);
    // Send the move to the SignalR service and update the board
    this.makeMove(this.selectedPiece.x, this.selectedPiece.y, x, y);
    this.selectedPiece = null; // Deselect after the move
  }
  // If no piece is selected and the clicked cell contains a piece, select it
  else if (clickedCell) {
    console.log(`Piece selected at (${x}, ${y})`, clickedCell);
    this.selectedPiece = { x, y }; // Select the piece
  }
}

  

  makeMove(fromX: number, fromY: number, toX: number, toY: number) {
    console.log(`Move made from (${fromX}, ${fromY}) to (${toX}, ${toY})`);
    // Send the move to the SignalR server
    this.signalRService.sendMove(fromX, fromY, toX, toY);

    // Update the board locally
    this.updateBoard(fromX, fromY, toX, toY);
  }

  updateBoard(fromX: number, fromY: number, toX: number, toY: number) {
    console.log(`Updating board from (${fromX}, ${fromY}) to (${toX}, ${toY})`);
    this.chessboard[toX][toY] = this.chessboard[fromX][fromY];
    this.chessboard[fromX][fromY] = null;
  }
}