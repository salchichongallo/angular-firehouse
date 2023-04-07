import { Injectable } from '@angular/core';
import { HousingLocation } from './housing-location';

@Injectable({
  providedIn: 'root',
})
export class SearchHousingService {
  private static ALL_LOCATIONS: HousingLocation[] = [
    {
      name: 'Acme Fresh Start Housing',
      slug: 'acme-fresh-start-housing',
      city: 'Chicago',
      state: 'IL',
      photo: '../assets/housing-1.webp',
      availableUnits: 4,
      wifi: true,
      laundry: true,
    },
    {
      name: 'A113 Transitional Housing',
      slug: 'a113-transitional-housing',
      city: 'Santa Monica',
      state: 'CA',
      photo: '../assets/housing-2.webp',
      availableUnits: 0,
      wifi: false,
      laundry: true,
    },
    {
      name: 'Warm Beds Housing Support',
      slug: 'warm-beds-housing-support',
      city: 'Juneau',
      state: 'AK',
      photo: '../assets/housing-3.webp',
      availableUnits: 1,
      wifi: false,
      laundry: false,
    },
  ];

  search(term: string): HousingLocation[] {
    const byCity = this.makeCityFilter(term.toLowerCase());
    return SearchHousingService.ALL_LOCATIONS.filter(byCity);
  }

  private makeCityFilter(term: string) {
    return (location: HousingLocation) =>
      location.city.toLowerCase().includes(term);
  }

  getBySlug(value: string): HousingLocation | null {
    return (
      SearchHousingService.ALL_LOCATIONS.find(
        location => location.slug === value,
      ) || null
    );
  }
}
