import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoorService } from 'src/app/shared/services/door.service';


@Component({
  selector: 'app-interior-doors',
  templateUrl: './interior-doors.component.html',
  styleUrls: ['./interior-doors.component.scss']
})
export class InteriorDoorsComponent implements OnInit {


  routingClass;

  interiorDoorsTypes = [];

  currentClass;


  constructor(

    private doorService: DoorService,
    private routerActivate: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.loadFromFirebase();
    // console.log("Interior DOORS COMPONENT");
    const category = this.routerActivate.snapshot;
    

    // console.log(category.params);
    
  }


  loadFromFirebase() {
    this.doorService.testFirestore().then(res => {

      let allDoors = [];

      let filteredTypesArr = [];
      
      allDoors = res.docs.map(el => el.data());

      this.currentClass = allDoors.filter(item => item.className.toLowerCase() == "Interior".toLowerCase());
      this.currentClass.forEach(element => {
        filteredTypesArr.push(element.type);
        
      });

      this.interiorDoorsTypes = this.unique(filteredTypesArr);
    
    })
  }



  // getDoorsFromDB() {
    
  //   this.doorsService.getDirectionalClass("Interior").subscribe(data => {
  //     console.log(data);
  //     this.routingClass = data[0].className;
  //     console.log(this.routingClass);

  //     this.currentClass = data[0].className;
  //     console.log(this.currentClass); 
      
  //     data.map(item => this.interiorDoorsTypes.push(item.type));
  //     this.interiorDoorsTypes = this.unique(this.interiorDoorsTypes);
  //     console.log(this.interiorDoorsTypes);
  //   })

  // }

  sendIndex(item) {

    
    
    // localStorage.setItem("currentProduct", item);
    // localStorage.setItem("currentClassName", this.currentClass);
    // console.log(item)
    // console.log(this.currentClass);    
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
