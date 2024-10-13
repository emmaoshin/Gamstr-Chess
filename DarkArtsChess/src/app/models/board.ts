import { Piece } from './piece';
import { PieceType } from './piece-type';
import { Color } from './color';

export public class Board
{
    public Piece[,] Squares { get; set; } = new Piece[8, 8];

    public Board()
    {
        InitializeBoard();
    }

    private void InitializeBoard()
    {
        // Initialize pieces on the board (for simplicity, just some pieces)
        Squares[0, 0] = new Piece { Type = PieceType.Rook, Color = Color.White };
        Squares[7, 7] = new Piece { Type = PieceType.Rook, Color = Color.Black };
        // Add other pieces as necessary
    }
}