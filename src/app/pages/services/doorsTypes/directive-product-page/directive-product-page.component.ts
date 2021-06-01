import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DoorService } from 'src/app/shared/services/door.service';
import { WoodProductsService } from 'src/app/shared/services/wood-products.service';

@Component({
  selector: 'app-directive-product-page',
  templateUrl: './directive-product-page.component.html',
  styleUrls: ['./directive-product-page.component.scss']
})
export class DirectiveProductPageComponent implements OnInit {

  searchClassName;
  searchType;
  searchId;

  directiveItem;

  directiveClass;

  localProducts = [];

  currentProductCount: number = 1;

  constructor(
    private doorService: DoorService,
    private woodProductsService: WoodProductsService,
    private routerActivate: ActivatedRoute,
  ) {

  }

  ngOnInit(): void {
    this.loadFromFirebase();
    const category = this.routerActivate.snapshot;
    this.searchClassName = category.params.className;
    this.searchType = category.params.type;
    this.searchId = category.params.id;

    // console.log(category.params);
    
  }


  loadFromFirebase() {
    this.doorService.testFirestore().then(res => {

      let allDoors = [];

      let filteredTypesArr = [];

      allDoors = res.docs.map(el => el.data());

      this.directiveItem = allDoors.filter(item => item.className.toLowerCase() == this.searchClassName.toLowerCase() && item.type.toLowerCase() == this.searchType.toLowerCase() && item.id == this.searchId);
      this.directiveItem = this.directiveItem[0];
      console.log(this.directiveItem);
      
      
      this.directiveItem.count = 1;
      

    })
  }



  // loadItemFromDB() {

  //   console.log(typeof category.params.id);
  //   this.doorsService.getDirectionalId(category.params.id).subscribe( data => {
  //   this.directiveItem = data[0];
  //   this.directiveClass = this.directiveItem.className;
  //   console.log(this.directiveClass);
  //   this.directiveItem.count = 1;



  //   console.log(this.directiveItem);
  //  })


  // }

  productCount(product: any, status: boolean) {

    

    if (status) {
      this.currentProductCount++
      product.count++;
      // console.log(product.count);
    } else {
      if (product.count > 1) {
        product.count--;
        // console.log(product.count);
        this.currentProductCount--
      }
    }

  }

  addToBasket(product): void {

    // this.doorsService.orderCount++

    
    // console.log(product.count);

    if (JSON.parse(localStorage.getItem('basket'))?.length > 0) {
      // console.log(JSON.parse(localStorage.getItem('basket')));


      this.localProducts = JSON.parse(localStorage.getItem('basket'));
      // console.log(this.localProducts);

      if (this.localProducts.some(localProduct => localProduct.id === product.id)) {

        const index = this.localProducts.findIndex(localProduct => localProduct.id === product.id);

        this.localProducts[index].count = +this.localProducts[index].count;
        this.localProducts[index].count += +product.count;
        product.count = this.currentProductCount;
        // console.log(+this.localProducts[index].count + 1);
        // console.log(product.count);


      } else {
        this.localProducts.push(product);
      }

      localStorage.setItem('basket', JSON.stringify(this.localProducts));
    } else {
      this.localProducts.push(product);
      // console.log(this.localProducts);
    }
    localStorage.setItem('basket', JSON.stringify(this.localProducts));
    this.doorService.sub$.next('text')


  }






}
