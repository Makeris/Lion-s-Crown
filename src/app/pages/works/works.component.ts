// import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AuthService } from 'src/app/shared/services/auth.service';
// import {MatDialog} from '@angular/material/dialog'
import { DoorService } from 'src/app/shared/services/door.service';

import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Loader } from '@googlemaps/js-api-loader';

import { MapService } from 'src/app/shared/services/map.service';
import { google } from 'google-maps';



@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  @ViewChild('map') divMap: ElementRef;
  // private map: google.maps.Map;
  private map: google.maps.Map;
  private gmarker: google.maps.Marker = null;


  NPDepartament = 'Select Departament';

  NPListDepartamets;

  mapLat ;
  mapLng;

  constructor(
    private router: Router,
    private cdr: ChangeDetectorRef,
    private mapService: MapService
  ) { }

  ngOnInit(): void {
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
          zoom: 12.5,
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
    
    this.getLocationOfDepartament(currentDepartamnet.Latitude, currentDepartamnet.Longitude);
  }

  getLocationOfDepartament(lat, lng) {

    this.mapLat = +lat;
    this.mapLng = +lng;
    this.initMap();

    // console.log(lat + " " + lng);
  }

}
