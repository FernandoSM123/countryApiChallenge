import { Component, OnInit,AfterViewInit,ViewChild, ElementRef } from '@angular/core';
import{RequestService} from './services/request.service';
import { CountryDataService } from './services/country-data.service';

import { Country } from './models/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,AfterViewInit{

  title = 'countryApiChallenge';
  @ViewChild('mainContainer') mainContainer: ElementRef;
  @ViewChild('btnChangeMode') changeMode: ElementRef;
  public countries:Array<Country>;

  constructor(
    private request:RequestService,
    private countryDataService:CountryDataService
    ){

  }
  ngOnInit(): void {
    this.getCountries().then(
      response =>{
        this.countries=response;
        this.countryDataService.setData(this.countries); //Set informacion de los paises en el servicio
      },
      error => {
        console.log(error);
      }
    );
  }

  ngAfterViewInit(): void {
    //change to dark/light mode on click
    this.changeMode.nativeElement.addEventListener("click",() => {
      this.mainContainer.nativeElement.classList.toggle("darkMode");
    });
  }

  //Request with all countries
  getCountries(){
    return new Promise<Country[]>((resolve, reject) => {
        this.request.getCountries().subscribe(
          response => {
            resolve(response);
          },
          error => {
            reject(error);
          });
      });
    }


}
