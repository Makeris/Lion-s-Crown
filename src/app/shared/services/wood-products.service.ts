import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IWoodProduct } from '../interfaces/interface/woodProductInterface';
import { AngularFirestore } from '@angular/fire/firestore';


@Injectable({
  providedIn: 'root'
})
export class WoodProductsService {

  private url = environment.url;

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore,
  ) {
    // this.url += 'woodProducts';
   }


 

   getProductsFromDB(): Observable<IWoodProduct[]> {

    return this.http.get<IWoodProduct[]>(this.url);
   }

   
  //  getDirectionalName(name:string): Observable<IWoodProduct[]> {
  //   return this.http.get<IWoodProduct[]>(this.url + `?name=${name}`);
  // }


  //  addNewProduct(product: IWoodProduct): Observable<IWoodProduct> {
  //   return this.http.post<IWoodProduct>(this.url, product);
  // }

  // deleteProduct(product: IWoodProduct): Observable<IWoodProduct> {
  //   return this.http.delete<IWoodProduct>(`${this.url}/${product.id}`);
  // }

  // updateProduct(product: IWoodProduct): Observable<IWoodProduct> {
  //   return this.http.put<IWoodProduct>(`${this.url}/${product.id}`, product);
  // }


  getProductsFromFS() {
    return this.firestore.collection('woodProducts').ref.get();
  }
  

  createProductForFS(product: any, id: string) {
    return this.firestore.collection('woodProducts').doc(id).set(product);
  }

  deleteProductFromFS(id: any) {
    return this.firestore.collection('woodProducts').doc(id).delete();
  }
  updateProductFromFS(id: any, product: any) {
    return this.firestore.collection('woodProducts').doc(id).set(product);
  }


  


}
