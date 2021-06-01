import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminOrdersPipe'
})
export class AdminOrdersPipePipe implements PipeTransform {

  transform(value: Array<any>, searchProduct: string): unknown {
    if(!value) {
      return [];
    }

    if(!searchProduct) {
      return value;
    }

    return value.filter(item => 
    item.userName.toLowerCase().includes(searchProduct.toLowerCase()) || 
    item.userPhone.toLowerCase().includes(searchProduct.toLowerCase()) ||
    item.userHouse.toLowerCase().includes(searchProduct.toLowerCase()) ||
    item.userStreet.toLowerCase().includes(searchProduct.toLowerCase()) ||
    item.userCity.toLowerCase().includes(searchProduct.toLowerCase()) 
    )  
    
    


  }

}
