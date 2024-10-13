// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
// import * as signalR from '@microsoft/signalr';

// @Injectable({
//   providedIn: 'root',
// })
// export class ChessGameService {
//  private hubConnection: signalR.HubConnection;
//   public moveReceived = new Subject<{ from: string, to: string, piece: string }>();

//   constructor() {
//     this.startConnection();
//     this.addReceiveMoveListener();
//   }

//   private startConnection() {
//     this.hubConnection = new signalR.HubConnectionBuilder()
//       .withUrl('http://localhost:5000/chessHub') // Backend URL
//       .build();

//     this.hubConnection
//       .start()
//       .then(() => console.log('Connection started'))
//       .catch(err => console.log('Error while starting connection: ' + err));
//   }

//   private addReceiveMoveListener() {
//     this.hubConnection.on('ReceiveMove', (fromPosition, toPosition, piece) => {
//       this.moveReceived.next({ from: fromPosition, to: toPosition, piece: piece });
//     });
//   }

//   public sendMove(from: string, to: string, piece: string) {
//     this.hubConnection.invoke('SendMove', from, to, piece)
//       .catch(err => console.error(err));
//   }
// } 

import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { Subject } from 'rxjs'; // Import Subject from RxJS

@Injectable({
  providedIn: 'root',
})
export class ChessGameService {
  private hubConnection!: signalR.HubConnection; // Use definite assignment assertion
  // public moveReceived = new Subject<{ from: string, to: string, piece: string }>();
  public moveReceived = new Subject<{ fromX: number, fromY: number, toX: number, toY: number }>();

  constructor() {
    this.startConnection();
    this.addReceiveMoveListener();
  }

  private startConnection() {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('https://localhost:7001/chessHub') // Backend URL
      .build();

    this.hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));
  }

  private addReceiveMoveListener() {
     this.hubConnection.on('ReceiveMove', (fromX, fromY, toX, toY) => {
      this.moveReceived.next({ fromX, fromY, toX, toY });
    });
    // this.hubConnection.on('ReceiveMove', (fromPosition, toPosition, piece) => {
    //   this.moveReceived.next({ from: fromPosition, to: toPosition, piece: piece });
    // });
  }

  // public sendMove(from: string, to: string, piece: string) {
  //   this.hubConnection.invoke('SendMove', from, to, piece)
  //     .catch(err => console.error(err));
  // }
   public sendMove(fromX: number, fromY: number, toX: number, toY: number) {
    this.hubConnection.invoke('SendMove', fromX, fromY, toX, toY)
      .catch(err => console.error(err));
  }
}