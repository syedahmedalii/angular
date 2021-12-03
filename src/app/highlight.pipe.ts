import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'highlight'
})
export class HighlightPipe implements PipeTransform {

  transform(value: any ): string {
    var str = "Full name: " + value.first +" "+ value.last
    return str;
  }

}
