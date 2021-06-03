// import { Component, OnInit } from '@angular/core';
import { IBasket } from 'src/app/shared/interfaces/interface/basketInterface';
import { Order } from 'src/app/shared/models/basketModel';
import { OrderService } from 'src/app/shared/services/order.service';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormGroup, FormControl } from '@angular/forms';

import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MapService } from 'src/app/shared/services/map.service';

// import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
// import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';
import { DoorService } from 'src/app/shared/services/door.service';







@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit {

  @ViewChild('map') divMap: ElementRef;
  // private map: google.maps.Map;
  private map: google.maps.Map;
  private gmarker: google.maps.Marker = null;


  NPDepartament = 'Select Departament';

  NPListDepartamets;


  mapLat = 40.000000;
  mapLng = 42.000000;


  // @ViewChild('map') divMap: ElementRef;
  // private map: google.maps.Map;
  // private gmarker: google.maps.Marker = null;


  // map: google.maps.Map;
  // map: google.maps.Map;

  // campaignOne: FormGroup;
  // campaignTwo: FormGroup;
  picker

  allOrders = [];
  lastOrderId;

  basketLength;

  orders: Array<any> = [];
  userName: string = '';
  userPhone: string = '';
  userCity: string = '';
  userStreet: string = '';
  userHouse: string = '';
  // totalPayment: string;
  userComment: string = '';
  totalPrice: any;

  isFieldsEmpty: boolean = true;


  constructor(
    private orderService: OrderService,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private mapService: MapService,
    private doorService: DoorService,
    // private mapService: MapService
  ) {

  }

  ngOnInit(): void {
    this.getBasket();
    this.fieldsTest();
    this.initMap();
    this.initNP();
    
  }

  initMap(): void { //google-карта

     

    const loader = new Loader({
      apiKey: this.mapService.apiKey
    });

    loader.load()
    .then(() => {
      this.map = new google.maps.Map(this.divMap.nativeElement, {
        center: this.mapService.mapLocation,
        zoom: 11.5,
        disableDefaultUI: true
      })

      let marker = new google.maps.Marker({
        position:{lat: this.mapLat, lng: this.mapLng},
        map: this.map,
      })

    })
}

initNP() {
  this.mapService.getNova().subscribe(data => {
    this.NPListDepartamets = data.data.filter(item => item.Description.includes("Відділення"));
   
    
  })
}

getDepartament() {

  let currentDepartamnet = this.NPListDepartamets[this.NPDepartament];
  console.log(currentDepartamnet);
  
  this.getLocationOfDepartament(currentDepartamnet.Latitude, currentDepartamnet.Longitude);

  this.userCity = currentDepartamnet.ShortAddress.split(',')[0];
  this.userStreet =  currentDepartamnet.ShortAddress.split(',')[1];
  this.userHouse = currentDepartamnet.ShortAddress.split(',')[2] + "Нова Пошта*";

}

getLocationOfDepartament(lat, lng) {

  this.mapLat = +lat;
  this.mapLng = +lng;
  this.initMap();

  // console.log(lat + " " + lng);
}






  private getBasket(): void {


    this.basketLength = localStorage.getItem('basket');

    console.log(this.basketLength);
    this.basketLength = JSON.parse(this.basketLength)?.length;

    // console.log(this.basketLength);


    if (localStorage.length > 0 && localStorage.getItem('basket')) {
      this.orders = JSON.parse(localStorage.getItem('basket'));
      // console.log(this.orders);
    }
    this.total();
  }

  productCount(product: any, status: boolean) {
    if (status) {
      product.count++;
    } else {
      if (product.count > 1) {
        product.count--;
      }
    }
    this.total();
    this.updateLocalProducts();
    // this.orderService.basket.next(this.orders);
  }

  deleteProduct(product: any) {
    const index = this.orders.findIndex(prod => prod.id === product.id);
    
    this.orders.splice(index, 1);
    this.total();
    this.updateLocalProducts();
    this.doorService.sub$.next(this.orders);
  }

  fieldsTest() {

    if (this.userName != '' && this.userPhone != '' && this.userCity != '' && this.userStreet != '' && this.userHouse != '') {
      this.isFieldsEmpty = false;
      // console.log(this.isFieldsEmpty)
    } else {
      this.isFieldsEmpty = true;
      // console.log(this.isFieldsEmpty)
    }

  }

  addOrder(): void {

    
    

    this.lastOrderId = this.UUID();

    if (this.userName != '' && this.userPhone != '' && this.userCity != '' && this.userStreet != '' && this.userHouse != '') {
      console.log("asd");
      
     
      const newOrder: IBasket = new Order(this.lastOrderId,
        this.userName,
        this.userPhone,
        this.userCity,
        this.userStreet,
        this.userHouse,
        this.orders,
        this.totalPrice,
        this.userComment);
        


        this.orders = [];
        localStorage.setItem('basket', JSON.stringify(this.orders));

        let orderCopy = Object.assign({},newOrder);

        console.log(orderCopy);

        this.orderService.createOrdersForFS(orderCopy, orderCopy.id).then(res => {
          // console.log("Order created");
          this.getBasket();
          this.clearFields();
          this.doorService.sub$.next(this.orders);
        // копнути його шо в мене тепер пусто щ

          
        })


    }
  
    // this.orderService.addNewOrder(newOrder).subscribe(data => {
    //   this.getBasket();

    // })

  }


  clearFields() {
    this.userName = ''; 
    this.userPhone = '';
    this.userCity = ''; 
    this.userStreet = ''; 
    this.userHouse = ''; 
    this.totalPrice = '';
    this.userComment = '';
  }

  private total() {

    // console.log(this.orders);
    let a = 0;


    this.orders.forEach(element => {
      if (element.price * 1 == element.price) {
        // this.totalPrice += element.price*element.count
        a += element.price * element.count;
        // console.log(element.price*element.count);
        // console.log(a);

      }

    });
    this.totalPrice = a;

    // console.log(this.totalPrice);

    // this.totalPrice = this.orders.reduce((total, elem) => {
    //   console.log(elem.price);

    //   if(elem.price*1 == elem.price) {

    //     return total + (elem.price * elem.count);
    //   }
    // }, 0);
  }

  private updateLocalProducts(): void {
    localStorage.setItem('basket', JSON.stringify(this.orders));
  }

  UUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

}


