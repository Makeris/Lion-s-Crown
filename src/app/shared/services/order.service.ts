import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IBasket } from '../interfaces/interface/basketInterface';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  // basket: Subject<any>  = new Subject<any>(); не то
  private url = environment.url;

  apiKey = '';
  mapLocation = { lat: 49.84178857391628, lng: 	24.031238169561295 } //пл.Ринок, 1

  sector1 = [ //прямокутник 1
    {lat: 49.844575, lng: 24.026266}, //верхня ліва
    {lat: 49.844575, lng: 24.038749}, //верхня права

    {lat: 49.839575, lng: 24.038749}, //нижня права
    {lat: 49.839575, lng: 24.026266} //нижня ліва
  ];

  sector2 = [ //прямокутник 2
    {lat: 49.849775, lng: 24.005900}, //верхня ліва
    {lat: 49.849775, lng: 24.041370}, //верхня права

    {lat: 49.832200, lng: 24.041370}, //нижня права
    {lat: 49.832200, lng: 24.005900} //нижня ліва
  ];

   sector1Param = {
    paths: this.sector1,
    strokeColor: 'green',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'green',
    editable: false,
    fillOpacity: 0.25,
    geodesic: true
   }

   sector2Param = {
    paths: this.sector2,
    strokeColor: 'yellow',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: 'yellow',
    editable: false,
    fillOpacity: 0.25,
    geodesic: true
   }



  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore,
  ) {
    this.url += 'orders';
   }

  //  addOrder(order: IBasket): Observable<IBasket> {
  //   return this.http.post<IBasket>(this.url, order);
  // }

  getAllOrders(): Observable<any> {
    return this.http.get(this.url);
  }

  addNewOrder(order: IBasket): Observable<IBasket> {
    return this.http.post<IBasket>(this.url, order);
  }

  deleteOrder(order) : Observable<any> {
    return this.http.delete(`${this.url}/${order.id}`);
  }



  getOrdersFirestore(): any {
    return this.firestore.collection('orders').ref.get();
  }
  
  createOrdersForFS(order: any, id: string) {
    return this.firestore.collection('orders').doc(id).set(order);
  }
  deleteOrderFromFS(id: any) {
    return this.firestore.collection('orders').doc(id).delete();
  }

}
