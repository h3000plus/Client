import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { IOrder } from '../shared/models/order.model';


@Injectable({
  providedIn: 'root'
})

export class SocketService {

  constructor(private socket: Socket) { }

  connect () {
    return this.socket.connect();
  }

  joinUserRoom (userId: string) {
    this.socket.emit('join', { userId });
    return true;
  }

  getOrderStatusChange() {
    return this.socket.fromEvent<any>('order-status-change');
  }
}


// import { Injectable } from '@angular/core';
// import { Socket } from 'ngx-socket-io';
// import { Observable, Subject } from 'rxjs';
// import { catchError, takeUntil } from 'rxjs/operators';

// @Injectable({
//   providedIn: 'root'
// })
// export class SocketService {
//   private unsubscribe$ = new Subject<void>();

//   constructor(private socket: Socket) { }

//   connect(): void {
//     this.socket.connect();
//   }

//   disconnect(): void {
//     this.socket.disconnect();
//   }

//   joinUserRoom(userId: string): void {
//     this.socket.emit('join', { userId });
//   }

//   getOrderStatusChange(): Observable<any> {
//     return this.socket
//       .fromEvent<any>('order-status-change')
//       .pipe(
//         takeUntil(this.unsubscribe$),
//         catchError(error => {
//           // Handle errors, e.g., log or display error message
//           console.error('Socket error:', error);
//           throw error; // Rethrow the error to propagate it further
//         })
//       );
//   }

//   ngOnDestroy(): void {
//     this.unsubscribe$.next();
//     this.unsubscribe$.complete();
//     this.disconnect(); // Disconnect from socket when the service is destroyed
//   }
// }
