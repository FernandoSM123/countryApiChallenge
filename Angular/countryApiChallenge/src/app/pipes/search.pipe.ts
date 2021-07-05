import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(countries: Country[], search: string): Country[] {
    let filterCountries: Country[];
    if (search.length === 0)
      filterCountries = countries;
    else
      filterCountries = countries.filter(country => country.name.toLowerCase().includes(search.toLowerCase()));
    return filterCountries;
  }

}
