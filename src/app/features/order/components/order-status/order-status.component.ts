import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { OrderService } from '../../../../services/order.service';
import { Subject, interval, switchMap, takeUntil, tap } from 'rxjs';
import io from 'socket.io-client';
import { SocketService } from '../../../../services/socket.service';

@Component({
  selector: 'app-order-status',
  templateUrl: './order-status.component.html',
  styleUrl: './order-status.component.scss'
})
export class OrderStatusComponent {
  constructor(private route: ActivatedRoute, private router: Router, private orderService: OrderService, private socket: SocketService) {}

  orderId: any;
  userId: any;
  orderStatus: any;
  private unsubscribe$ = new Subject<void>();
  condition: boolean[] = [false, false, false, false];

  ngOnInit() {

    this.route.params.pipe(
      switchMap(params => {
        this.orderId = params['id'];
        return this.orderId;
      })
    ).subscribe();

    this.socket.connect();
    this.orderService.getOrderUserId().subscribe((data) => {
      
      this.userId = data;
      this.socket.joinUserRoom(this.userId);
      
    });

    this.socket.getOrderStatusChange().subscribe(data => {
      console.log(data);

      if (data._id === this.orderId) {
        this.orderStatus = data.orderStatus;
      }
    })

  }
 
  
  

  handleback() {
    this.router.navigate(['orders'])
  }


 
}


 //   // takeUntil(this.unsubscribe$),
    //   // tap(() => this.connectToSocket())
    // ).subscribe(data => {
    //   this.orderStatus = data;
    // })
      // if (this.orderStatus === 'completed') {
      //   this.unsubscribe$.next();
      //   this.unsubscribe$.complete();
      //   // this.condition[3] = true;
      // }
      // if (this.orderStatus === 'pending') {
      //   this.condition[0] = true;
      // }
      // if (this.orderStatus === 'preparing') {
      //   this.condition[1] = true;
      // }
      // if (this.orderStatus === 'ready') {
      //   this.condition[2] = true;
      // } 
    // });

    // Check for updates every 1 seconds
    // interval(1000).pipe(
    //   takeUntil(this.unsubscribe$)
    // ).subscribe(() => {
    //   if (this.orderStatus !== 'completed') {
    //     this.orderService.updateOrderStatus(this.orderId).subscribe(updatedStatus => {
    //       this.orderStatus = updatedStatus;
    //       if (this.orderStatus === 'completed') {
    //         this.unsubscribe$.next();
    //         this.unsubscribe$.complete();
    //       }
    //     });
    //   }
      
    // });

  // ngOnDestroy() {
  //   this.unsubscribe$.next();
  //   this.unsubscribe$.complete();
  // }

  // connectToSocket() {
  //   const socket = io('http://localhost:8080');
  //   console.log('connected');
  //   socket.on('orderStatusUpdate', (updatedOrderStatus: any) => {
  //     if (updatedOrderStatus.id === this.orderId) {
  //       this.orderStatus = updatedOrderStatus.status;
  //       if (this.orderStatus === 'completed') {
  //         this.unsubscribe$.next();
  //         this.unsubscribe$.complete();
  //       }
  //     }
  //   });
  // }
