import { Injectable } from '@angular/core';
import {Observable, Subject} from 'rxjs';
import { BehaviorSubject } from 'rxjs';

import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryDataService {

  private countryDataSource= new BehaviorSubject<any>("");

  constructor() { }

  setData(data: Country[]) {
    this.countryDataSource.next(data);
  }

  getData():Observable<Country[]>{
    return this.countryDataSource.asObservable();
  }
}
