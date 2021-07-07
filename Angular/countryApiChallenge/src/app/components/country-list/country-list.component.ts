import { Component, OnInit } from '@angular/core';
import { CountryDataService } from 'src/app/services/country-data.service';
import { PaginationInstance } from 'ngx-pagination';

import { Country } from 'src/app/models/country';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css'],
})
export class CountryListComponent implements OnInit {

  public countries: Country[];
  public filterCountries: Country[];
  public regionName: string = "All";
  public searchTerm: string = "";
  public total: number;
  public page: number = 1;

  //ngx.pagination properties
  public filter: string = '';
  public maxSize: number = 7;
  public directionLinks: boolean = true;
  public autoHide: boolean = true;
  public responsive: boolean = true;
  public config: PaginationInstance = {
    id: 'advanced',
    itemsPerPage: 25,
    currentPage: 1
  };
  public labels: any = {
    previousLabel: 'Prev',
    nextLabel: 'Next',
    screenReaderPaginationLabel: 'Pagination',
    screenReaderPageLabel: 'page',
    screenReaderCurrentLabel: `You're on page`
  };

  constructor(private countryDataService: CountryDataService) { }

  ngOnInit(): void {
    this.countryDataService.getData().subscribe(countryData => {
      this.countries = countryData; //Array original
      this.filterCountries = this.countries //Array usado como filtro
      this.total = this.filterCountries.length;
    });
  }

  changeRegion(event: any) {
    this.filterCountries = [];
    this.regionName = event.target.value;
    this.filterCountriesByRegion();
    this.filterCountriesByName();
    this.page = 1;
    this.total = this.filterCountries.length;
  }

  searchCountry() {
    this.filterCountries = [];
    this.filterCountriesByRegion();
    this.filterCountriesByName();
    this.page = 1;
    this.total = this.filterCountries.length;
  }

  filterCountriesByRegion() {
    if (this.regionName == "All")
      this.filterCountries = this.countries;
    else
      this.filterCountries = this.countries.filter(country => country.region == this.regionName);
  }

  filterCountriesByName() {
    if (this.searchTerm.length === 0)
      return;
    else
      this.filterCountries = this.filterCountries.filter(country => country.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  onPageChange(number: number) {
    this.page = number;
  }

  onPageBoundsCorrection(number: number) {
    this.page = number;
  }

}
