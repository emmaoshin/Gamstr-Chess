export public enum PieceType { King, Queen, Rook, Bishop, Knight, Pawn }
export public enum Color { White, Black }

export public class Piece
{
    public PieceType Type { get; set; }
    public Color Color { get; set; }
}