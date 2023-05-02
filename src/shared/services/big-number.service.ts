import { Injectable } from '@angular/core';
import { BigNumberPipe } from "../Pipes/big-number.pipe"
@Injectable({
  providedIn: 'root'
})
export class BigNumberService {

 constructor(private bigNumberPipe: BigNumberPipe) {}

  transform(value: any, digits?: number, suffixes?: string[]): string {
    return this.bigNumberPipe.transform(value, digits, suffixes);
  }

  static transform(value: any, digits?: number, suffixes?: string[]): string {
    const service = new BigNumberService(new BigNumberPipe());
    return service.transform(value);
  }
}
