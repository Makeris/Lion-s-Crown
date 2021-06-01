import { Component, OnInit } from '@angular/core';
import { OrderService } from 'src/app/shared/services/order.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.scss']
})
export class AdminOrdersComponent implements OnInit {


  allOrders = [];

  orderInfo;

  searchProduct = '';

  fullOrder;

  constructor(
    private orderService: OrderService,
  ) { }

  ngOnInit(): void {
    this.getOrdersFromDB();
  }

  getOrdersFromDB() {

    this.orderService.getOrdersFirestore().then(res => {

      this.allOrders = res.docs.map(el => el.data());
      
        // console.log(this.allOrders);
    })
    // this.orderService.getAllOrders().subscribe(data => {

    //   this.allOrders = data;
    //   console.log(data);
    // })
  }

  viewItem(fullOrder, order) {

    this.fullOrder = fullOrder;
    console.log(fullOrder);

    this.orderInfo = order;

    // console.log(order);

  }

  deleteItem(order) {
    // console.log(order);
   
    this.orderService.deleteOrderFromFS(order.id).then(res => {
      this.getOrdersFromDB();
    })
   
    // this.orderService.deleteOrder(order).subscribe(data => {
    //   console.log("Order DELETED")
    //   this.getOrdersFromDB();
    // })

  }

}
