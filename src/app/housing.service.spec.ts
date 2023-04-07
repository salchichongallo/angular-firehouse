import { TestBed } from '@angular/core/testing';

import { SearchHousingService } from './search-housing.service';

describe('HousingService', () => {
  let housing: SearchHousingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    housing = TestBed.inject(SearchHousingService);
  });

  it('should be created', () => {
    expect(housing).toBeTruthy();
  });

  it('searches by city', () => {
    const term = 'chicago';
    const locations = housing.search(term);
    locations.forEach(location =>
      expect(location.city.toLowerCase()).toContain(term),
    );
  });
});
