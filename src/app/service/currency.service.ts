import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyService {

  private selectedCurrency$: BehaviorSubject<string> = new BehaviorSubject<string>("INR")
  constructor() { }

  setCurrency(currency: string){
    this.selectedCurrency$.next(currency)
  };

  getCurrency(){
    return this.selectedCurrency$.asObservable()
  };
}
