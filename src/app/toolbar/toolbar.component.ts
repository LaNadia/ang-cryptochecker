import { Component } from '@angular/core';
import { CurrencyService } from '../service/currency.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  selectedCurrency: string = 'ENR';
  selected: boolean = true;
  constructor(private CurrencyService: CurrencyService){}

  sendCurrency(event: string){
    console.log(event);
    this.CurrencyService.setCurrency(event);
  }
}
