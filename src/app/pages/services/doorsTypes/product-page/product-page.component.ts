import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoorService } from 'src/app/shared/services/door.service';
import { ShefieldService } from 'src/app/shared/services/shefield.service';
import Swiper from 'swiper';
import SwiperCore from 'swiper/core';


// import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'


@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.scss'],
 

})
export class ProductPageComponent implements OnInit {

  @Input() message: string;
 
  isShowhed;
  
  localProducts = [];

  currentProductCount: number = 1;

  productId;
  currentProduct = []


  currentClass;

  searchClassName;
  searchType;


  constructor(
    private doorService: DoorService,
    private routerActivate: ActivatedRoute,
  ) { }

  ngOnInit(): void {
   
    const category = this.routerActivate.snapshot

    this.searchClassName = category.params.className;
    this.searchType = category.params.type;
    
    this.loadFromFirebase();
    
  }


  loadFromFirebase() {
    this.doorService.testFirestore().then(res => {

      let allDoors = [];

      let filteredTypesArr = [];
      
      allDoors = res.docs.map(el => el.data());

      this.currentProduct = allDoors.filter(item => item.className.toLowerCase() == this.searchClassName.toLowerCase() && item.type.toLowerCase() == this.searchType.toLowerCase());
      // console.log(this.currentProduct);
      
    })
  }



  showInfo(i) {
    this.isShowhed = i;
    // console.log(i);
  }

 
  // getCurrentProduct() {

    
  //   this.doorsService.getDirectionalType(localStorage.getItem('currentClassName'),localStorage.getItem("currentProduct")).subscribe(data => {
  //     this.currentProduct = data;
  //     console.log(data);
  //   })
  // }

  directiveItem(i: any) {

    localStorage.setItem('directiveItem', i);

  }


  productCount(product: any, status: boolean) {
    if (status) {
      this.currentProductCount++
      product.count++;
    } else {
      if (product.count > 1) {
        product.count--;
        this.currentProductCount--
      }
    }
    
  }

  addToBasket(product): void {

    // console.log(JSON.parse(localStorage.getItem('basket')));
    if(JSON.parse(localStorage.getItem('basket')).length > 0) {
      
      
      this.localProducts = JSON.parse(localStorage.getItem('basket'));
      // console.log(this.localProducts);
  
      if (this.localProducts.some(localProduct => localProduct.id === product.id)){
  
        const index = this.localProducts.findIndex(localProduct => localProduct.id === product.id);

        this.localProducts[index].count = +this.localProducts[index].count;
        this.localProducts[index].count += +product.count;
  
        // console.log(this.localProducts[index].count);

      } else {
        this.localProducts.push(product);
      }

      localStorage.setItem('basket', JSON.stringify(this.localProducts));
    } else {
      this.localProducts.push(product);
      // console.log(this.localProducts);
    }
    localStorage.setItem('basket', JSON.stringify(this.localProducts));

   
  }

}




