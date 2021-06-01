import { Component, OnInit } from '@angular/core';
import { DoorService } from 'src/app/shared/services/door.service';

@Component({
  selector: 'app-furniture',
  templateUrl: './furniture.component.html',
  styleUrls: ['./furniture.component.scss']
})
export class FurnitureComponent implements OnInit {

  furnitureTypes = [];
  currentClass;


  arrClassName = [];

  constructor(
    public doorService: DoorService,
  ) { }

  ngOnInit(): void {
    this.loadFromFirebase();
    // console.log('FURNITURE');
    
  }


  loadFromFirebase() {
    this.doorService.testFirestore().then(res => {

      let allDoors = [];

      let filteredTypesArr = [];
      
      allDoors = res.docs.map(el => el.data());

      this.currentClass = allDoors.filter(item => item.className.toLowerCase() == "Furniture".toLowerCase());
      this.currentClass.forEach(element => {
        filteredTypesArr.push(element.type);
        
      });

      this.furnitureTypes = this.unique(filteredTypesArr);
    
    })
  }

  // getFurnitureFromDB() {
  //   this.doorService.getDirectionalClass('Furniture').subscribe(data => {
  //     console.log(data);
  //     // this.arrClassName = data[0];
  //     this.currentClass = data[0].className;
  //     console.log(this.currentClass);
  //     data.map(item => this.furnitureTypes.push(item.type));
  //     this.furnitureTypes = this.unique(this.furnitureTypes);
  //     console.log(this.furnitureTypes)

  //   })
  // }

  sendIndex(item) {
    
    // localStorage.setItem("currentProduct", item);
    // localStorage.setItem("currentClassName", this.currentClass);
    // console.log(item)
   

    

    
  }


  unique(arr) {
    let result = [];
  
    for (let str of arr) {
      if (!result.includes(str)) {
        result.push(str);
      }
    }
  
    return result;
  }

}
