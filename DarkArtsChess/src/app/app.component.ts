import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
// Correct the import statement to match the exported component name
import { ChessboardComponent } from './Components/chess-board/chess-board.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LoggerService, LogLevel } from './Utility/Logging/logger-service.service';

// import { LoggerService, LogLevel } from '@LoggingService/logger-service.service';
import { ChessPieceComponent } from './Components/chess-piece/chess-piece.component';

@Component({
  selector: 'app-root',
  standalone: true,
  // Correctly configure imports for standalone components
  imports: [RouterOutlet, ChessboardComponent, ChessPieceComponent], // Corrected to include both necessary imports
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'], // Correct the property name to 'styleUrls'
  schemas: [CUSTOM_ELEMENTS_SCHEMA], // Allow custom elements
})
export class AppComponent {
  title = 'DarkArtsChess';

   constructor(private logger: LoggerService) {
    this.logger.setLogLevel(LogLevel.INFO); // Set log level to info
    this.logger.info('Initializing AppComponent');
  }

}
