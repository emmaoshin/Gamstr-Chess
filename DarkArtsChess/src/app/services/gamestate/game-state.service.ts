import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameStateService {
  private board: any[][] = [];

  constructor() {
    this.initializeBoard();
  }

  // initializeBoard() {
  //   this.board = Array(8)
  //     .fill(null)
  //     .map(() => Array(8).fill(null));

  //   // Place initial pieces on the board (as in ChessboardComponent)
  // }
   // Initialize chessboard with pieces and empty cells
  initializeBoard() {
    // Initialize an empty 8x8 board
    this.board = Array(8)
      .fill(null)
      .map(() => Array(8).fill(null));

    // Place white pieces
    this.board[0] = [
      { type: 'rook', color: 'white' },
      { type: 'knight', color: 'white' },
      { type: 'bishop', color: 'white' },
      { type: 'queen', color: 'white' },
      { type: 'king', color: 'white' },
      { type: 'bishop', color: 'white' },
      { type: 'knight', color: 'white' },
      { type: 'rook', color: 'white' },
    ];

    // Place white pawns
    this.board[1] = Array(8).fill({ type: 'pawn', color: 'white' });

    // Place black pieces
    this.board[7] = [
      { type: 'rook', color: 'black' },
      { type: 'knight', color: 'black' },
      { type: 'bishop', color: 'black' },
      { type: 'queen', color: 'black' },
      { type: 'king', color: 'black' },
      { type: 'bishop', color: 'black' },
      { type: 'knight', color: 'black' },
      { type: 'rook', color: 'black' },
    ];

    // Place black pawns
    this.board[6] = Array(8).fill({ type: 'pawn', color: 'black' });

    // Rows 2 to 5 remain empty (null values)
    for (let i = 2; i <= 5; i++) {
      this.board[i] = Array(8).fill(null);
    }
  }

  getBoard() {
    return this.board;
  }

  // Move a piece (for simplicity, assume moves are valid for now)
  movePiece(fromX: number, fromY: number, toX: number, toY: number) {
    const piece = this.board[fromX][fromY];
    this.board[toX][toY] = piece;
    this.board[fromX][fromY] = null;
  }
}