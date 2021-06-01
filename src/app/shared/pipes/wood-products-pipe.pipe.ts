import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'woodProductsPipe'
})
export class WoodProductsPipePipe implements PipeTransform {

  transform(value: Array<any>, searchProduct: string): unknown {
    if(!value) {
      return [];
    }

    if(!searchProduct) {
      return value;
    }

    return value.filter(item => 
    item.name.toLowerCase().includes(searchProduct.toLowerCase()) || 
    item.minSize.toLowerCase().includes(searchProduct.toLowerCase()) ||
    item.maxSize.toLowerCase().includes(searchProduct.toLowerCase()) ||
    item.article.toLowerCase().includes(searchProduct.toLowerCase()) 
    )  
    
    


  }
}
