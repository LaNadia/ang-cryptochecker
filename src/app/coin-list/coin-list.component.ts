import { CurrencyService } from './../service/currency.service';
import { Component, AfterViewInit,  ViewChild } from '@angular/core';
import { ApiService } from '../service/api.service';


import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { currencyDataArrayType } from '../types/currencyDataArray.types';

@Component({
  selector: 'app-coin-list',
  templateUrl: './coin-list.component.html',
  styleUrls: ['./coin-list.component.scss']
})
export class CoinListComponent {

  constructor(private api: ApiService, private router: Router, private currencyService: CurrencyService){}

  bannerData: currencyDataArrayType[] = [];
  currency: string = "INR";
  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['symbol', 'current_price', 'price_change_percentage_24h', 'market_cap'] // from api result

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;


  ngOnInit(): void {
   this.currencyService.getCurrency().subscribe( res => {
      this.currency = res;
      this.getAllData();
      this.getBannerData();
   })
  
  }

  getBannerData(){
    this.api.getTrendingCurrency(this.currency).subscribe( (res: currencyDataArrayType[] )=> {
      this.bannerData = res;
    })
  }

  getAllData(){
    this.api.getCurrencyData(this.currency).subscribe( res=> {
      console.log(res);
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  };

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  };

  goToDetails(row: any){
    this.router.navigate(['coin-detail', row.id])
  }
}
