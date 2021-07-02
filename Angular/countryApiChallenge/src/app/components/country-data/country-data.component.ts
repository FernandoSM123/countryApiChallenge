import { Component, OnInit } from '@angular/core';
import { Router, Params, ActivatedRoute } from '@angular/router';

import { CountryDataService } from 'src/app/services/country-data.service';
import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-country-data',
  templateUrl: './country-data.component.html',
  styleUrls: ['./country-data.component.css']
})
export class CountryDataComponent implements OnInit {

  public countries: Country[];
  public country: Country;
  public countryBorders:Country[];

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private countryDataService: CountryDataService
  ) {
    this.countryBorders=new Array<Country>();
   }

  ngOnInit(): void {
    //Get lista de paises
    this.getCountryList().then(response => {
      this.countries = response;

      //recorrer parametros de la URL
      this._route.params.subscribe((_params: Params) => {
        let countryName: string = _params.countryName;
        this.country = <Country>this.searchCountryForName(countryName);
        //Obtener lista de paises (Bordes)
        this.searchBorderCountries();
      });
    });
  }

  //Buscar pais por nombre
  searchCountryForName(name: string): Country | undefined {
    return this.countries.find(x => x.name == name);
  }

    //Buscar pais por codigo
    searchCountryForCode(code: string): Country | undefined {
      return this.countries.find(x => x.alpha3Code == code);
    }

  //Obtener lista de paises (borders)
  searchBorderCountries():void{
    this.countryBorders=new Array<Country>();
      this.country.borders.forEach(code=>{
        this.countryBorders.push(<Country>this.searchCountryForCode(code));
      });
  }
  

  //Get lista de paises
  getCountryList() {
    return new Promise<Country[]>((resolve) => {
      this.countryDataService.getData().subscribe(
        countryData => {
          resolve(countryData);
        });
    });
  }

}
