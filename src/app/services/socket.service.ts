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
