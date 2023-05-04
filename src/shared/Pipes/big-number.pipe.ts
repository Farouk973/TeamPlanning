import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bigNumber'
})
export class BigNumberPipe implements PipeTransform {
  transform(value: number, digits?: number, suffixes?: string[]): string {
    const suffixesDefault = ['', 'K', 'M', 'B', 'T'];
    const suffixesToUse = suffixes ? suffixes : suffixesDefault;
    const MAX_LENGTH = suffixesToUse.length - 1;
    let index = 0;

    while (value >= 1000 && index < MAX_LENGTH) {
      value /= 1000;
      index++;
    }

    const roundedValue = (digits !== undefined) ? value.toFixed(digits) : value.toString();
    const suffix = suffixesToUse[index];
    return `${roundedValue}${suffix}`;
  }

}
