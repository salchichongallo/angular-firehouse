import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class SearchHousingService {
  private static ALL_LOCATIONS: HousingLocation[] = [
    {
      name: 'Acme Fresh Start Housing',
      city: 'Chicago',
      state: 'IL',
      photo: '../assets/housing-1.jpg',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: 'A113 Transitional Housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: '../assets/housing-2.jpg',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: 'Warm Beds Housing Support',
      city: 'Juneau',
      state: 'AK',
      photo: '../assets/housing-3.jpg',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
  ];

  locations: HousingLocation[] = [];

  constructor() {
    this.locations = SearchHousingService.ALL_LOCATIONS.slice();
  }

  search(term: string) {
    const byCity = this.makeCityFilter(term.toLowerCase());
    this.locations = SearchHousingService.ALL_LOCATIONS.filter(byCity);
  }

  private makeCityFilter(term: string) {
    return (location: HousingLocation) =>
      location.city.toLowerCase().includes(term);
  }
}
