import { Component, OnInit } from '@angular/core';
import { DoorService } from 'src/app/shared/services/door.service';
// import { IDoors } from 'src/app/shared/interfaces/interface/shefieldDoorsInterface';
import { Product } from 'src/app/shared/models/productModel';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { WoodProductsService } from 'src/app/shared/services/wood-products.service';
import { IDoors } from 'src/app/shared/interfaces/interface/shefieldDoorsInterface';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {


  timeOut = 0;
  lastDoorsListIndex;
  lastWoodProductsIndex;
  currentLastId : number = 0;

  allProducts = [];
  allProductsClasses = ['entrace','interior','furniture'];
  selectedProductClass = [];


  currentItemView;

  lastItemId;

  searchProduct = '';

  isCreate;
  isEdit;

  createCustomType;
  newCustomType = '';

  categoryImg;

  classSelector = '';
  productType = '';
  productName = '';
  productArticle = '';
  productPreparing = '';
  productContainment = '';
  productDecoration = '';
  productFurniture = '';
  productConstruction = '';
  // productImageInput = '';
  productImage = '';

  furnitureName = '';
  furnitureBrand = '';
  furnitureArticle = '';
  furnitureDescriprion = '';
  furniturePrice = '';

  isFieldsFulled = true;

  editedProduct;

  uploadProgress: Observable<number>;

  productBrands: any = ["KALE","MOTTURA","BORDER","CISA","ISEO","MUL-T-LOCK","SECUREMME"];





  constructor(
    private doorService: DoorService,
    private storage: AngularFireStorage,
    private woodProducts: WoodProductsService

  ) { }

  ngOnInit(): void {

    this.loadProductsFromDB();
    this.getBrandsFromDB();
    // this.getCureentLastID()
    
  }

  uploadFile(event) {
    // console.log('Image');
    const file = event.target.files[0];
    const filePath = `images/${this.UUID()}.${file.type.split('/')[1]}`;
    const task = this.storage.upload(filePath, file);
    this.uploadProgress = task.percentageChanges();
    task.then( result => {
      this.storage.ref(`images/${result.metadata.name}`).getDownloadURL().subscribe(data => {
        // console.log(data);
        this.productImage = data;
        this.fieldsTest();
      })
    })
  }

  UUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
       var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
       return v.toString(16);
    });
 }


 getCureentLastID() {

    this.timeOut = 0;

   this.woodProducts.getProductsFromDB().subscribe(data => {
     this.lastWoodProductsIndex = data.slice(-1)[0].id;
    //  console.log(this.lastWoodProductsIndex);
     this.timeOut++
     if(this.timeOut == 2) {
      // this.getTotalLastIndex();
    }
     
     
     
   })

  //  this.doorService.getAllDoors().subscribe(data => {
  //    this.lastDoorsListIndex = data.slice(-1)[0].id;
  //    this.timeOut++
  //    if(this.timeOut == 2) {
  //     //  this.getTotalLastIndex();
  //    }
  //  })


 }

//  getTotalLastIndex() {

//   if(this.lastWoodProductsIndex > this.lastDoorsListIndex) {
//     this.currentLastId = this.lastWoodProductsIndex;
    
//   } else {
//     this.currentLastId = this.lastDoorsListIndex;
//   }

//   // console.log( "current last IF " + this.currentLastId);

//  }


  loadProductsFromDB() {

    // this.doorService.getAllDoors().subscribe(data => {

    //   this.allProducts = data;
      
    //   data.map(item => this.allProductsClasses.push(item.className));
    //   this.allProductsClasses = this.unique(this.allProductsClasses);
    //   this.fieldsTest();
    //   this.lastItemId = this.allProducts.slice(-1)[0].id + 1;
    //   // console.log(this.lastItemId);
    //   this.getCureentLastID()
      

    // })

    this.doorService.testFirestore().then(res => {
      this.allProducts = res.docs.map(el => el.data());
      this.fieldsTest();
    })




  }


  fieldsTest() {

    if (this.classSelector != '' && this.classSelector != 'furniture') {

      if (this.classSelector != '' && this.productType != '' && this.productName != '' && this.productArticle != '' && this.productPreparing != '' && this.productContainment != '' && this.productDecoration != '' && this.productFurniture != '' && this.productConstruction != '' && this.productImage != '') {
        this.isFieldsFulled = false;
        // console.log(this.isFieldsFulled)
      } else {
        this.isFieldsFulled = true;
        // console.log(this.isFieldsFulled)
      }
    } else if (this.classSelector == 'furniture') {

      // console.log('aaa');


      if( this.productType != '' && this.furnitureName != '' && this.furnitureArticle != '' && this.furnitureDescriprion != '' && this.furniturePrice != '' && this.productImage != '') {

        if(this.productType == 'lock' && this.furnitureBrand != '') {

          this.isFieldsFulled = false;
        } else {
          this.isFieldsFulled = false;
        }
      }
      
    } else {
      this.isFieldsFulled = true;

    }

  }

  getBrandsFromDB() {

    this.doorService.getBrandsFirestore().then(res => {
      this.productBrands = res.docs.map(el => el.data())[0].brands;
    })
    // console.log(this.productBrands);
    // this.doorService.getDirectionalType("Furniture",'lock').subscribe(data => {
    //   console.log(data);
    //   data.map(item => this.productBrands.push(item.brand));
    //   this.productBrands = this.unique(this.productBrands);

    // })
  }

  addNewProductInDB() {

    if (this.classSelector == 'furniture') {
      
      if(this.productType != '' && this.furnitureName != '' && this.furnitureArticle != '' && this.furnitureDescriprion != '' &&  this.furniturePrice  != '') {
        console.log('product')

        this.lastItemId = this.UUID();

        const newFurniture = new Product( this.lastItemId,this.classSelector,this.productType,this.furnitureName, this.furnitureArticle, true, true, '', '', '', '', '', this.furnitureBrand, this.productImage, this.furniturePrice, this.furnitureDescriprion,);
       

        let newObj = Object.assign({}, newFurniture);

        this.doorService.createProductForFS(newObj, this.lastItemId).then(res => {
          // console.log("Updated");
          this.loadProductsFromDB();
        })

        // this.doorService.addNewProduct(newFurniture).subscribe(data => {
        //   this.loadProductsFromDB();
        // });

      }

    } else {

      if ( this.classSelector != '' && this.productType != '' && this.productName != '' && this.productArticle != '' && this.productPreparing != '' && this.productContainment != '' && this.productDecoration != '' && this.productFurniture != '' &&  this.productConstruction != '') {

        this.lastItemId = this.UUID();
        const newProduct = new Product(this.lastItemId, this.classSelector, this.productType, this.productName, this.productArticle, true, true, this.productPreparing, this.productContainment, this.productDecoration, this.productFurniture, this.productConstruction, "", this.productImage, null,'');
       
        let newObj = Object.assign({}, newProduct);
        // console.log(newObj);
        

        this.doorService.createProductForFS(newObj, this.lastItemId).then(res => {
          // console.log("Created");
          this.loadProductsFromDB();
        })

        // this.doorService.addNewProduct(newProduct).subscribe(data => {
        //   this.loadProductsFromDB();
        // });
      }

    }


  }


  getCurrentImage(val) {

    // console.log(val);
    // this.doorService.getDirectionalType(this.classSelector,val).subscribe(data => {

      
      

    // })
  }

  deleteItem(product: any) {
    console.log(product.id);
    
    this.doorService.deleteProductFromFS(product.id).then(res => {
        // console.log('asd');
        this.loadProductsFromDB();
      })
      // this.doorService.deleteProduct(product).subscribe(data => {
        //   console.log("Success")
        // this.loadProductsFromDB();
    // })
  }

  viewItem(product: IDoors) {

    this.currentItemView = product;
    
  }

  editItem(product: any) {

    console.log(product);
    
    this.fieldsTest();
    this.clearFields();
    this.editedProduct = product;

    this.classSelector = product.className;
    this.selector();
    this.productType = product.type;
    console.log(this.productType);
    this.productName = product.name;
    this.productArticle = product.article;
    this.productPreparing = product.preparingTime;
    this.productContainment = product.containment;
    this.productDecoration = product.decoration;
    this.productFurniture = product.furniture;
    this.productConstruction = product.construction;
    this.productImage = product.image;


    this.furnitureName =  product.name;
    this.furnitureBrand = product.brand;
    this.furnitureArticle = product.article;
    this.furnitureDescriprion = product.description;
    this.furniturePrice = product.price;

    // console.log(product.id);
    this.fieldsTest();


  }

  saveEdit() {

    if(this.classSelector == "furniture") {

      this.editedProduct.type = this.productType;
      this.editedProduct.name = this.furnitureName;
      this.editedProduct.brand = this.furnitureBrand;
      this.editedProduct.article = this.furnitureArticle;
      this.editedProduct.description = this.furnitureDescriprion;
      this.editedProduct.price = this.furniturePrice;

      this.doorService.updateProductFromFS(this.editedProduct.id, this.editedProduct).then(res => {
        
        this.loadProductsFromDB();
        
      })

    } else {

      this.editedProduct.className = this.classSelector;
      this.editedProduct.type = this.productType;
      this.editedProduct.name = this.productName;
      this.editedProduct.article = this.productArticle;
      this.editedProduct.preparingTime = this.productPreparing;
      this.editedProduct.containment = this.productContainment;
      this.editedProduct.decoration = this.productDecoration;
      this.editedProduct.furniture = this.productFurniture;
      this.editedProduct.construction = this.productConstruction;
      this.editedProduct.image = this.productImage;
      // console.log(this.editedProduct.id);
      // console.log(this.editedProduct);
      this.doorService.updateProductFromFS(this.editedProduct.id, this.editedProduct).then(res => {
        // console.log("Updated");
        this.loadProductsFromDB();
        
      })
    }
    // this.doorService.updateProduct(this.editedProduct).subscribe(data => {
    //   console.log("Edited");
    // })
  }



  selector() {
    this.doorService.getCategoriesFirestore().then(res => {
        
    
        
      let filteredTypes;
      filteredTypes = res.docs.map(el => el.data()).filter(item => item.className.toLowerCase() == this.classSelector.toLowerCase());
      this.selectedProductClass = filteredTypes[0].types;
      // console.log(filteredTypes);
      
      // console.log( res.docs.map(el => el.data()));
      
      this.fieldsTest();
    })


    

    // console.log(this.classSelector.toLowerCase());
    //   this.selectedProductClass = [];
    
    // if(this.classSelector == "furniture") {
    //   // this.selectedProductClass = [
    //   //   "lock","handle","armour cover","cylinder", "door eye", "key cover"
    //   // ]
    // } else {

    //   this.doorService.getCategoriesFirestore().then(res => {
        
    
        
    //     let filteredTypes;
    //     filteredTypes = res.docs.map(el => el.data()).filter(item => item.className.toLowerCase() == this.classSelector.toLowerCase());
    //     this.selectedProductClass = filteredTypes[0].types;
    //     // console.log(filteredTypes);
        
    //     // console.log( res.docs.map(el => el.data()));
        
    //     this.fieldsTest();
    //   })

    //   // this.doorService.testFirestore().then(res => {
        
    //   //   let filteredTypes;
    //   //   filteredTypes = res.docs.map(el => el.data()).filter(item => item.className.toLowerCase() == this.classSelector.toLowerCase());
        
    //   //   filteredTypes.map(item => this.selectedProductClass.push(item.type));
    //   //   this.selectedProductClass = this.unique(this.selectedProductClass);
        
        
    //   //   this.fieldsTest();
    //   // })
    // }


    

    // this.selectedProductClass = this.allProductsClasses;
    // this.doorService.getDirectionalClass(this.classSelector).subscribe(data => {


    //   // this.categoryImage 
    //   console.log(data)

    //   data.map(item => this.selectedProductClass.push(item.type));
    //   this.selectedProductClass = this.unique(this.selectedProductClass);

       

    // })

  }

  clearFields() {

    // console.log(this.productImage);

    this.productImage = '';
    this.isFieldsFulled = true;

    // console.log('Cleared Fields');
    this.classSelector = '';
    this.productType = '';
    this.productName = '';
    this.productArticle = '';
    this.productPreparing = '';
    this.productContainment = '';
    this.productDecoration = '';
    this.productFurniture = '';
    this.productConstruction = '';

    this.furnitureName = '';
    this.furnitureBrand = '';
    this.furnitureArticle = '';
    this.furnitureDescriprion = '';
    this.furniturePrice = '';
    
    // document.getElementById('progressImg').style.width = '0'

  }

  addProductToClass() {

    // console.log(this.productType);

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
