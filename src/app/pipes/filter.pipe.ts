import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultBeers = [];
    for(const beer of value){
      if(beer.name.toLowerCase().indexOf(arg.toLowerCase()) > -1){
        resultBeers.push(beer);
      }
    }
    return resultBeers;
  }

}
