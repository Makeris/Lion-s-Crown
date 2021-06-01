import { Component, OnInit } from '@angular/core';
import { WoodProductsService } from 'src/app/shared/services/wood-products.service';

@Component({
  selector: 'app-wood-products',
  templateUrl: './wood-products.component.html',
  styleUrls: ['./wood-products.component.scss']
})
export class WoodProductsComponent implements OnInit {


  allWoodProducts = [];

  constructor(
    private woodProductsService: WoodProductsService,
  ) { }

  ngOnInit(): void {
    this.loadProductsFromDB();
    // console.log("dsda");
    
  }


  findItem(product) {
    // console.log(product);

    localStorage.setItem("woodProduct", product.name);

  }

  loadProductsFromDB() {


    

    this.woodProductsService.getProductsFromFS().then(res => {
      this.allWoodProducts = res.docs.map(el => el.data());
      // console.log(this.allWoodProducts);
    })

    



    // this.doorService.testFirestore().then(res => {
    //   this.doorsList = res.docs.map(el => el.data());
    //   // console.log(this.doorsList);
    //   this.currentCategory = this.doorsList.filter(item => item.className.toLowerCase() == "Entrace".toLowerCase())
    //   console.log(this.currentCategory);
      
    // })

  }

  

}
