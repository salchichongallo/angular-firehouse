import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { SearchHousingService } from '../search-housing.service';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
  @Output()
  selectedLocationEvent = new EventEmitter<HousingLocation>();

  locations: HousingLocation[] = [];

  locationsCountLabel: string = '';

  constructor(public housingService: SearchHousingService) {}

  ngOnInit() {
    this.searchHousings('');
  }

  searchHousings(term: string) {
    this.locations = this.housingService.search(term);
    this.countLocations();
  }

  private countLocations() {
    const count = this.locations.length;
    const areMultiple = count > 1;
    const isOne = count === 1;

    if (areMultiple) {
      this.locationsCountLabel = `${count} locations found:`;
    } else if (isOne) {
      this.locationsCountLabel = '1 location found:';
    } else {
      this.locationsCountLabel = 'No locations found.';
    }
  }
}
