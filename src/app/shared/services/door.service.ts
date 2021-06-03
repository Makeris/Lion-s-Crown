import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, Subject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IDoors } from '../interfaces/interface/shefieldDoorsInterface';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class DoorService {
  private url = environment.url;
  

  // sub$: Subject<any> = new Subject();
  sub$: Subject<any> = new Subject();

  orderCount = JSON.parse( localStorage.getItem('basket'))?.length;

  allBrands = ['KALE','APECS','BORDER','CISA','ISEO','MOTTURA', 'MUL-T-LOCK', 'SECUREME','SERRATURE'];

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore,
  ) {
    this.url += 'doorsList';
   }



   addNewBrand(arr) {
    this.allBrands = arr;
   }

  //  getAllDoors(): Observable<IDoors[]> {
  //    return this.http.get<IDoors[]>(this.url);
  //  }
  
  //  getDirectionalType(className: string,type:string): Observable<IDoors[]> {
  //   return this.http.get<IDoors[]>(this.url + `?className=${className}&type=${type}`);
  // }
  //  getDirectionalId(id: number): Observable<any> {
  //   return this.http.get<IDoors[]>(this.url + `?id=${id}`);
  // }

  //  getDirectionalClass(productClass: string): Observable<IDoors[]> {
  //   return this.http.get<IDoors[]>(this.url + `?className=${productClass}`);
  //  }

  //  getDirectionalBrand(brand: string): Observable<IDoors[]> {

  //   return this.http.get<IDoors[]>(this.url + `?className=${brand}`);

  //  }

   


   addNewProduct(product: IDoors): Observable<IDoors> {
    return this.http.post<IDoors>(this.url, product);
  }

  deleteProduct(product: IDoors): Observable<IDoors> {
    return this.http.delete<IDoors>(`${this.url}/${product.id}`);
  }

  updateProduct(product: IDoors): Observable<IDoors> {
    return this.http.put<IDoors>(`${this.url}/${product.id}`, product);
  }




  testFirestore(): any {
    return this.firestore.collection('doorsList').ref.get();
  }

  createProductForFS(product: any, id: string) {
    return this.firestore.collection('doorsList').doc(id).set(product);
  }

  deleteProductFromFS(id: any) {
    return this.firestore.collection('doorsList').doc(id).delete();
  }
  updateProductFromFS(id: any, product: any) {
    return this.firestore.collection('doorsList').doc(id).set(product);
  }


  getCategoriesFirestore(): any {
    return this.firestore.collection('doorsTypes').ref.get();
  }

  createCategoryForFS(types: any, className: string) {
    return this.firestore.collection('doorsTypes').doc(className).set(types);
  }
  deleteCategoryForFS(types: any, className: string) {
    return this.firestore.collection('doorsTypes').doc(className).set(types);
  }
  
  
  getBrandsFirestore(): any {
    return this.firestore.collection('brands').ref.get();
  }
  
  createBrandForFS(types: any, className: string) {
    return this.firestore.collection('brands').doc(className).set(types);
  }
  deleteBrandForFS(types: any, className: string) {
    return this.firestore.collection('brands').doc(className).set(types);
  }

  // deleteProductFromFS(id: any) {
  //   return this.firestore.collection('doorsTypes').doc(id).delete();
  // }
  // updateProductFromFS(id: any, product: any) {
  //   return this.firestore.collection('doorsList').doc(id).set(product);
  // }


  getSliderFirestore(): any {
    return this.firestore.collection('sliderImages').ref.get();
  }

  deleteSliderFS(newObj: any, className: string) {
    return this.firestore.collection('sliderImages').doc(className).set(newObj);
  }
  createSliderFS(newObj: any, className: string) {
    return this.firestore.collection('sliderImages').doc(className).set(newObj);
  }









}
