import { Component, OnInit } from '@angular/core';
import { CountryDataService } from 'src/app/services/country-data.service';

import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {

  public countries:Country[]

  constructor(private countryDataService:CountryDataService) { }

  ngOnInit(): void {
    this.countryDataService.getData().subscribe(countryData => {
      this.countries=countryData;
    });
  }

}
