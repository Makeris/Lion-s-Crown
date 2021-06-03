import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { DoorService } from 'src/app/shared/services/door.service';
import { WoodProductsService } from 'src/app/shared/services/wood-products.service';

@Component({
  selector: 'app-admin-sub',
  templateUrl: './admin-sub.component.html',
  styleUrls: ['./admin-sub.component.scss']
})
export class AdminSubComponent implements OnInit {


  uploadProgress: Observable<number>;
  imagesStorage;
  sliderImagesArr = [];
  newImage;

  isImageUploaded = true;


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
    private woodProducts: WoodProductsService,
    private storage: AngularFireStorage,
  ) { }

  ngOnInit(): void {
    this.getAllCategories();
    this.getImagesFromFB()
  }


  getImagesFromFB() {
    this.doorService.getSliderFirestore().then(res => {
      this.imagesStorage = res.docs.map(el => el.data());

      this.sliderImagesArr = this.imagesStorage[0].images;
      this.isImageUploaded = true;
      
      
    })
  }

  deleteImage(item) {
    console.log(this.imagesStorage[0]);

    
    

    let images = [];
    this.sliderImagesArr.forEach(element => {
      if(element != item) {
        images.push(element);
      }
    });

    this.imagesStorage[0].images = images;
    console.log(this.imagesStorage[0]);
    
    this.doorService.deleteSliderFS(this.imagesStorage[0], 'arrImages').then(res => {
      this.getImagesFromFB();
    })
 
  }

  addNewImage() {

  
   

    this.sliderImagesArr.push(this.newImage);
    this.imagesStorage[0].images = this.sliderImagesArr;
    console.log(this.imagesStorage[0]);

    
    this.doorService.deleteSliderFS(this.imagesStorage[0], 'arrImages').then(res => {
      this.getImagesFromFB();
    })

  }


  uploadFile(event) {
    // console.log('Image');
    const file = event.target.files[0];
    const filePath = `images/${this.UUID()}.${file.type.split('/')[1]}`;
    const task = this.storage.upload(filePath, file);
    this.uploadProgress = task.percentageChanges();
    task.then( result => {
      this.storage.ref(`images/${result.metadata.name}`).getDownloadURL().subscribe(data => {
        console.log(data);
        this.newImage = data;
        this.isImageUploaded = false;
        
        
      })
    })
  }

  UUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
       return v.toString(16);
    });
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
