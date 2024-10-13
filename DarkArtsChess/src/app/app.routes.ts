import { Routes } from '@angular/router';
import { ChessboardComponent } from './Components/chess-board/chess-board.component';
import {  LoginComponent } from './Components/login/login.component';
import { AuthGuard } from './auth.guard';
import { AppComponent } from './app.component';
// add routes for chessboard component
export const routes: Routes = [
  // {
  //   path: "",
  //   component: AppComponent,
  //   canActivate: [AuthGuard],
  // },
  {
    path: "chessboard",
    component: ChessboardComponent,
    data: {
      "title": "Chessboard"
    }
  },
  {
    path: "login",
    component: LoginComponent,
    data: {
      "title": "Login"
    }
  }
];
