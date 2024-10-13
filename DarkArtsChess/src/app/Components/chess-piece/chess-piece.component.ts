import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

type PieceType = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
type PieceColor = 'white' | 'black';
// create a piece class to hold the type and color of the piece
export class Piece {
  type: PieceType;
  color: PieceColor;
  constructor(type: PieceType, color: PieceColor) {
    this.type = type;
    this.color = color;
    console.log('Piece created', { type, color });
  }
}

@Component({
  selector: 'chess-piece',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chess-piece.component.html',
  styleUrls: ['./chess-piece.component.scss'], // Corrected from 'styleUrl' to 'styleUrls'
})
export class ChessPieceComponent {
  @Input() piece: Piece | null = null;

  constructor() {
    // console.log('ChessPieceComponent initialized');
  }

  getPieceSymbol(type: PieceType, color: PieceColor): string {
    // console.log('getPieceSymbol called', { type, color })
    const symbols: Record<PieceType, Record<PieceColor, string>> = {
      pawn: { white: '♙', black: '♟︎' },
      rook: { white: '♖', black: '♜' },
      knight: { white: '♘', black: '♞' },
      bishop: { white: '♗', black: '♝' },
      queen: { white: '♕', black: '♛' },
      king: { white: '♔', black: '♚' },
    };

    return symbols[type][color];
  }
}
// import { Component, Input } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { LoggerService, LogLevel } from '../../Utility/Logging/logger-service.service';

// type PieceType = 'pawn' | 'rook' | 'knight' | 'bishop' | 'queen' | 'king';
// type PieceColor = 'white' | 'black';

// @Component({
//   selector: 'chess-piece',
//   standalone: true,
//   imports: [CommonModule],
//   templateUrl: './chess-piece.component.html',
//   styleUrls: ['./chess-piece.component.scss'],
// })
// export class ChessPieceComponent {
//   @Input() piece: { type: PieceType; color: PieceColor } | null = null;

//   constructor( private logger: LoggerService) {
//     this.logger.setLogLevel(LogLevel.DEBUG);
//     this.logger.debug('ChessPieceComponent initialized');
//     console.log()
//   }

//   getPieceSymbol(type: PieceType, color: PieceColor): string {
//     const symbols: Record<PieceType, Record<PieceColor, string>> = {
//       pawn: { white: '♙', black: '♟︎' },
//       rook: { white: '♖', black: '♜' },
//       knight: { white: '♘', black: '♞' },
//       bishop: { white: '♗', black: '♝' },
//       queen: { white: '♕', black: '♛' },
//       king: { white: '♔', black: '♚' },
//     };

//     this.logger.debug('getPieceSymbol called', { type, color });
//     return symbols[type][color];
//   }
// }
