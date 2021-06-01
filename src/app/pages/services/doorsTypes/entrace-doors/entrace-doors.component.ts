import { Component, OnInit } from '@angular/core';
import { IDoors } from 'src/app/shared/interfaces/interface/shefieldDoorsInterface';
import { DoorService } from 'src/app/shared/services/door.service';
import { ShefieldService } from 'src/app/shared/services/shefield.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-entrace-doors',
  templateUrl: './entrace-doors.component.html',
  styleUrls: ['./entrace-doors.component.scss'],
  
})
export class EntraceDoorsComponent implements OnInit {

  entraceDoorsTypes = [];
  currentClass;

  directiveType;

  
  
  constructor(
    public doorService: DoorService,
    
  ) { }

  ngOnInit(): void {
    // this.loadDoorsFromDB();
    
    this.loadFromFirebase();
    
  }


  loadFromFirebase() {
    this.doorService.testFirestore().then(res => {

      let allDoors = [];

      let filteredTypesArr = [];
      
      allDoors = res.docs.map(el => el.data());

      this.currentClass = allDoors.filter(item => item.className.toLowerCase() == "Entrace".toLowerCase());
      this.currentClass.forEach(element => {
        filteredTypesArr.push(element.type);
        
      });

      this.entraceDoorsTypes = this.unique(filteredTypesArr);
    
    })
  }

  // loadDoorsFromDB() {

  
  //     this.doorService.getDirectionalClass('Entrace').subscribe(data => {
  //       this.currentClass = data[0].className;
  //       data.map(item => this.entraceDoorsTypes.push(item.type));
  //       this.entraceDoorsTypes = this.unique(this.entraceDoorsTypes);
        
        
  //     })
    

  // }





  unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }

  sendIndex(item) {
    
    // localStorage.setItem("currentProduct", item);
    // localStorage.setItem("currentClassName", this.currentClass);
    // console.log(item)
    this.directiveType = item;    
  }

}
