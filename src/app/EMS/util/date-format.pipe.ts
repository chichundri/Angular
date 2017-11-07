import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
  name: 'dateFormat'
})
export class DateFormatPipe implements PipeTransform {

  constructor(private datePipe: DatePipe){}

  transform(myDate: any, args?: any): any {
    return this.datePipe.transform(new Date(myDate), 'yyyy/MM/dd');
  }

}
