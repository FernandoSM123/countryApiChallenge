import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class RequestService {


  constructor(
    private http:HttpClient
  ) {}

  getCountries():Observable<Country[]> {
    const path = "https://restcountries.eu/rest/v2/all";
    return this.http.get<Country[]>(path);
  }
}
