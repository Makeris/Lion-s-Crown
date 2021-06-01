import { Component, OnInit } from '@angular/core';
import { DoorService } from 'src/app/shared/services/door.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  ordersCount = 0;
  constructor(
    private doorService: DoorService,
  ) { }

  ngOnInit(): void {
    this.getOrdersCount()
    // this.doorService.orderCount
    this.doorService.sub$.subscribe(res => {
      this.getOrdersCount();
    })
    // console.log("Header");
    
  }

  getOrdersCount() {
    this.ordersCount = JSON.parse( localStorage.getItem('basket'))?.length;
    
  }

}
