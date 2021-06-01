import { Component, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';
import { WoodProductsService } from 'src/app/shared/services/wood-products.service';
import { Observable } from 'rxjs';
import { WoodProduct } from 'src/app/shared/models/woodProductModel';
import { DoorService } from 'src/app/shared/services/door.service';

@Component({
  selector: 'app-admin-wood-products',
  templateUrl: './admin-wood-products.component.html',
  styleUrls: ['./admin-wood-products.component.scss']
})
export class AdminWoodProductsComponent implements OnInit {


  timeOut = 0;
  lastDoorsListIndex;
  lastWoodProductsIndex;
  currentLastId: number = 0;
  

  searchProduct = '';
  allWoodProducts = [];


  uploadProgress: Observable<number>;

  isEdit: boolean;
  isCreate: boolean;

  isUploaded: boolean;

  isFieldsFulled: boolean = true;

  woodName = '';
  woodArticle = '';
  woodMinSize = '';
  woodMaxSize = '';
  productImage = '';
  woodDescription = '';
  woodCount = 1;
  woodPrice;


  viewedProduct;

  editedProduct;

  createId: any;



  constructor(
    private doorService: DoorService,
    private woodProducts: WoodProductsService,
    private storage: AngularFireStorage,

  ) { }

  ngOnInit(): void {
    this.loadProductsFromDB();
    this.getCureentLastID();
  }

  uploadFile(event) {

    this.isUploaded = true;
    // console.log('Image');
    const file = event.target.files[0];
    const filePath = `images/${this.UUID()}.${file.type.split('/')[1]}`;
    const task = this.storage.upload(filePath, file);
    this.uploadProgress = task.percentageChanges();
    task.then(result => {
      this.storage.ref(`images/${result.metadata.name}`).getDownloadURL().subscribe(data => {
        // console.log(data);
        this.productImage = data;
        this.fieldsTest();
      })
    })
  }

  UUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  getCureentLastID() {

    this.timeOut = 0;

    this.woodProducts.getProductsFromDB().subscribe(data => {
      this.lastWoodProductsIndex = data.slice(-1)[0].id;
      console.log(this.lastWoodProductsIndex);
      this.timeOut++
      if (this.timeOut == 2) {
        this.getTotalLastIndex();
      }



    })

    // this.doorService.getAllDoors().subscribe(data => {
    //   this.lastDoorsListIndex = data.slice(-1)[0].id;
    //   this.timeOut++
    //   if (this.timeOut == 2) {
    //     this.getTotalLastIndex();
    //   }
    // })


  }

  getTotalLastIndex() {

    if (this.lastWoodProductsIndex > this.lastDoorsListIndex) {
      this.currentLastId = this.lastWoodProductsIndex;

    } else {
      this.currentLastId = this.lastDoorsListIndex;
    }

    console.log("current last IF " + this.currentLastId);

  }


  loadProductsFromDB() {
    // this.woodProducts.getProductsFromDB().subscribe(data => {
    //   console.log(data);
    //   this.allWoodProducts = data;
    // })

    this.woodProducts.getProductsFromFS().then(res => {
      this.allWoodProducts = res.docs.map(el => el.data());
      
      
    })

  }



  viewItem(product) {
    this.viewedProduct = product;
    console.log(product);
  }

  editItem(product) {

    console.log(product);

    this.editedProduct = product;


    this.isUploaded = true;

    this.woodName = this.editedProduct.name;
    this.woodArticle = this.editedProduct.article;
    this.woodDescription = this.editedProduct.description;
    this.woodMinSize = this.editedProduct.minSize;
    this.woodMaxSize = this.editedProduct.maxSize;
    this.productImage = this.editedProduct.image;
    this.woodPrice = this.editedProduct.price;

  }

  saveEdit() {
    this.editedProduct.name = this.woodName;
    this.editedProduct.article = this.woodArticle;
    this.editedProduct.description = this.woodDescription;
    this.editedProduct.minSize = this.woodMinSize;
    this.editedProduct.maxSize = this.woodMaxSize;
    this.editedProduct.price = null;
    this.editedProduct.image = this.productImage;


    console.log(this.editedProduct);

    this.woodProducts.updateProductFromFS(this.editedProduct.id, this.editedProduct).then(res => {
      // console.log("Updated");
      this.loadProductsFromDB();
      
    })

    // this.woodProducts.updateProduct(this.editedProduct).subscribe(data => {
    //   this.loadProductsFromDB();
    // })

  }

  addNewProductInDB() {

    // console.log('sadads');

    if (this.woodName != '' && this.woodArticle != '' && this.woodMinSize != '' && this.woodMaxSize != '' && this.woodDescription != '' && this.productImage != '') {

      
      this.createId = this.UUID();


      const newProduct = new WoodProduct(this.createId, this.woodName, this.woodArticle, this.woodMinSize, this.woodMaxSize, this.productImage, this.woodDescription, this.woodCount);

      // console.log(newProduct);

      let newProd = Object.assign({}, newProduct);
      
      

      this.woodProducts.createProductForFS(newProd, this.createId).then(res => {
        // console.log("Added");
          this.loadProductsFromDB();
        
      })

      // this.woodProducts.addNewProduct(newProduct).subscribe(data => {
      //   this.loadProductsFromDB();
      //   console.log("prodoct added");
      // })

      // this.woodProducts.createProductForFS(newProduct, this.UUID()).then(res => {
      //   console.log('PRODUCT CREATED');
      // })


    }

  }

  deleteItem(product) {
    // this.woodProducts.deleteProduct(product).subscribe(data => {
    //   this.loadProductsFromDB();
    //   console.log('Product deleted')
    // })

    // console.log(product.id);
    

    this.woodProducts.deleteProductFromFS(product.id).then(res => {
      // console.log("DELETED");
      this.loadProductsFromDB();
    })




  }


  clearFields() {

    this.woodName = '';
    this.woodArticle = '';
    this.woodMinSize = '';
    this.woodMaxSize = '';
    this.productImage = '';
    this.woodDescription = '';
    // this.woodPrice = '';

    this.isUploaded = false;

  }

  fieldsTest() {

    // this.isFieldsFulled = true;

    if (this.isEdit == true) {

      if (this.woodName != '' && this.woodArticle != '' && this.woodMinSize != '' && this.woodMaxSize != '' && this.productImage != '' && this.woodDescription != '') {
        // console.log('false')

        this.isFieldsFulled = false;
      } else {
        // console.log('true')
        this.isFieldsFulled = true;
      }
    } else {

      if (this.woodName != '' && this.woodArticle != '' && this.woodMinSize != '' && this.woodMaxSize != '' && this.productImage != '' && this.woodDescription != '') {
        // console.log('false')

        this.isFieldsFulled = false;

      } else {
        // console.log('true')
        this.isFieldsFulled = true;

      }
    }

  }

}
