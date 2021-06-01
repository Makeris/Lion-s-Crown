import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adminProductsPipe'
})
export class AdminProductsPipePipe implements PipeTransform {

  transform(value: Array<any>, searchProduct: string): unknown {
    if(!value) {
      return [];
    }

    if(!searchProduct) {
      return value;
    }

    return value.filter(item => 
    item.className.toLowerCase().includes(searchProduct.toLowerCase()) || 
    item.type.toLowerCase().includes(searchProduct.toLowerCase()) ||
    item.name.toLowerCase().includes(searchProduct.toLowerCase()) ||
    item.article.toLowerCase().includes(searchProduct.toLowerCase()) 
    )  
    
    


  }

}
