import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: any, upper: boolean = true): any {
    console.log({ value, upper });
    return upper ? value.toUpperCase() : value.toLowerCase();
  }
}
