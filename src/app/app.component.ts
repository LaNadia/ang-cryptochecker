import { CurrencyService } from './service/currency.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  selectedCurrency: string = 'ENR';

  constructor(private CurrencyService: CurrencyService){}

  sendCurrency(event: string){
    console.log(event);
    this.CurrencyService.setCurrency(event);
  }
}
