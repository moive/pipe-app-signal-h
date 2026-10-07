import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'toggleCase',
})
export class ToggleCasePipe implements PipeTransform {
  transform(value: string | null | undefined, upper: boolean = true): any {
    console.log({ value, upper });
    const text = value ?? '';
    return upper ? text.toUpperCase() : text.toLowerCase();
  }
}
