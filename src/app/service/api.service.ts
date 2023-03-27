import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { currencyDataArrayType } from '../types/currencyDataArray.types';
import { Observable } from 'rxjs';
import { graphicalDataType } from '../types/graphicalDataType.types';
import { currencyByIdDataType } from '../types/currencyByIdData.types';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getCurrencyData(currency: string): Observable<currencyDataArrayType[]>{
    return this.http.get<currencyDataArrayType[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&sparkline=false`);
  };

  getTrendingCurrency(currency:string): Observable<currencyDataArrayType[]>{
    return this.http.get<currencyDataArrayType[]>(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=gecko_desc&per_page=10&page=1&sparkline=false&price_change_percentage=24h`)
  }
  getGrpahicalCurrencyData(coinId: number, currency:string, days: number): Observable<graphicalDataType>{
    let a = this.http.get<any>(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency}&days=${days}`)
    console.log('getGrpahicalCurrencyData', a)
    return a
  }
  getCurrencyById(coinId:number): Observable<currencyByIdDataType>{
    return this.http.get<currencyByIdDataType>(`https://api.coingecko.com/api/v3/coins/${coinId}`)
  }
}
