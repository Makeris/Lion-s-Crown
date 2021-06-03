import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { IWoodProduct } from 'src/app/shared/interfaces/interface/woodProductInterface';
import { DoorService } from 'src/app/shared/services/door.service';
import { OrderService } from 'src/app/shared/services/order.service';
import { WoodProductsService } from 'src/app/shared/services/wood-products.service';

@Component({
  selector: 'app-wood-product-page',
  templateUrl: './wood-product-page.component.html',
  styleUrls: ['./wood-product-page.component.scss']
})
export class WoodProductPageComponent implements OnInit {

  currentItem;

  localProducts = [];

  allWoodProducts;

  currentProductCount: number = 1;

  product;

  constructor(
    private woodProductsService: WoodProductsService,
    private orderService: OrderService,
    private doorsService: DoorService,
    private routerActivate: ActivatedRoute
  ) { }




  ngOnInit(): void {
    // this.loadProductFromDB();
    // console.log(localStorage.getItem('basket'));
    this.test();
  }


  test() {
    const category = this.routerActivate.snapshot
    console.log(category.params.id);
    this.woodProductsService.getProductsFromFS().then(res => {
      this.allWoodProducts = res.docs.map(el => el.data());
      this.product = this.allWoodProducts.filter(item => item.id == category.params.id);
      this.product = this.product[0];
      this.product.count = 1;
      // console.log(this.product);
    })


    // console.log(this.currentItem);
  }


  // loadProductFromDB() {
  //   this.woodProductsService.getDirectionalName(localStorage.getItem('woodProduct')).subscribe(data => {
  //     this.currentItem = data; 
  //     console.log(this.currentItem);
  //     this.product = this.currentItem[0];  
  //   })

  // }

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
    if(JSON.parse(localStorage.getItem('basket'))?.length > 0) {
      
      
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
    this.doorsService.sub$.next('text')
    
  }

}
