import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'searchparamas'
})
export class FiltersPipe implements PipeTransform {
  transform(value: any, nameParam:string) {
    if(value.length === 0) {
      return value;
    } else {
      const resultArry:any = [];
      for(const data of value) {
        if(nameParam == data.name) {
          resultArry.push(data)
        }
      }
      return resultArry;
    }
  }
}