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

  it('should have initial locations', () => {
    expect(housing.locations.length).toBeGreaterThan(0);
  });

  it('searches by city', () => {
    const term = 'chicago';
    housing.search(term);
    housing.locations.forEach(location =>
      expect(location.city.toLowerCase()).toContain(term),
    );
  });
});
