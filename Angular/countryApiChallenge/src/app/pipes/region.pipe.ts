import { Pipe, PipeTransform } from '@angular/core';
import { Country } from '../models/country';

@Pipe({
  name: 'region'
})
export class RegionPipe implements PipeTransform {

  transform(countries: Country[], region: string): Country[] {
    let filterCountries: Country[];
    if (region == "All")
      filterCountries = countries;
    else
      filterCountries = countries.filter(country => country.region == region);
    return filterCountries;
  }

}
