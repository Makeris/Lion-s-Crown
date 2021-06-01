import { Component, OnInit } from '@angular/core';
import { DoorService } from 'src/app/shared/services/door.service';
import { WoodProductsService } from 'src/app/shared/services/wood-products.service';

@Component({
  selector: 'app-admin-sub',
  templateUrl: './admin-sub.component.html',
  styleUrls: ['./admin-sub.component.scss']
})
export class AdminSubComponent implements OnInit {

  categoryImg;
  searchProduct = '';

  avalibleBrands: any;
  newBrand = '';
  isNewBrandFulled = true;

  allItems = [];
  allCategories = [];
  allSubCategories = [];

  currentChange = 1;
  newItem : any;

  categorySelect = '';

  currentEditebleItem;
  currentTypes;

  brandSelector = '';


  currentEditedBrand;

  newBrnd: any = {}
 

  constructor(
    private doorService: DoorService,
    private woodProducts: WoodProductsService
  ) { }

  ngOnInit(): void {
    this.getAllCategories()
  }

  fieldsCheck() {
    if(this.newBrand != '') {

      this.isNewBrandFulled = false;
    } else {
    this.isNewBrandFulled = true;

  }

  }

  deleteCatetegory(item) {
  

    let types = [];
    item.types.forEach(element => {
      if(element.toLowerCase() != this.categorySelect.toLowerCase()) {
        types.push(element);
      }
    });
    item.types = types;
    
    this.doorService.deleteCategoryForFS(item, item.className).then(res => {
      console.log("DELETED");
      this.getAllCategories();
      this.categorySelect = '';
      
    })
      
  }

  preEdit(item) {
    this.currentEditebleItem = item;
    // this.currentClassName = item.className;
    // this.currentTypes = item.types;
    // console.log(this.currentTypes);
    
    
    
  }

  AddNewBrand(obj) {
    
    if(this.newBrand != '') {


      if(this.currentChange == 2) {

        this.currentEditebleItem.types.push(this.newBrand);
        
        this.doorService.createCategoryForFS(this.currentEditebleItem,this.currentEditebleItem.className).then(res => {
          console.log('CREATED');
          this.getAllCategories();
        })
      } else if(this.currentChange == 1 ) {

        
        this.avalibleBrands.push(this.newBrand);
        this.newBrnd.subType = "brands";
        this.newBrnd.brands = this.avalibleBrands;
        // console.log(this.newBrnd);
        

        
        this.doorService.createBrandForFS(this.newBrnd,this.newBrnd.subType).then(res => {
          // console.log('CREATED');
          this.getAllCategories();
        })
      }
        
    }

  }

  getAllCategories() {

    this.doorService.getCategoriesFirestore().then(res => {

      this.allItems = res.docs.map(el => el.data());
      // console.log(this.allItems);
      

    })

    this.doorService.getBrandsFirestore().then(res => {

      this.avalibleBrands = res.docs.map(el => el.data())[0].brands;
      // console.log(this.avalibleBrands);
      

    })


    

    // this.avalibleBrands = this.doorService.allBrands;
    // console.log(this.avalibleBrands);
    // this.doorService.getAllDoors().subscribe(data => {

    //   this.allItems = data;
 
    // })

    // console.log(this.allSubCategories);

    // this.doorService.getAllDoors().subscribe(data => {
    //   this.allCategories = this.unique(data);
    // })
    
  }


  deleteBrand() {

    let brnds = [];
    this.avalibleBrands.forEach(element => {
      if(element.toLowerCase() != this.brandSelector.toLowerCase()) {
        brnds.push(element);
      }
    });
    this.newBrnd.subType = "brands";
    this.newBrnd.brands = brnds;
    // console.log(this.newBrnd);
    
    
    this.doorService.createBrandForFS(this.newBrnd,"brands").then(res => {
      // console.log('CREATED');
      this.getAllCategories();
      this.brandSelector = '';
    })

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
