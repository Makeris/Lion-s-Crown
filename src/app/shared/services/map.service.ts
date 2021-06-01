// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class MapService {

//   constructor() { }
// }




import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapService {
  // apiKey = 'AIzaSyDKmK_ZSFQkIEcNMAIB_NlQ4oZcxHnDPPQ';

  key = '6f5ae358ca9e2b2b013f5eb183c2f118';


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
    public http: HttpClient
  ) { }



  getNova() :Observable<any> {
    // console.log(this.seach);
    
     return this.http.post<Array<any>>(`https://api.novaposhta.ua/v2.0/json/${this.key}`, {
       "modelName": "AddressGeneral",
         "calledMethod": "getWarehouses",
         "methodProperties": {
              "Language": "ua",
              "CityName": "львів",
         },
         
         "apiKey": this.key
     
      })
      
   }


}
