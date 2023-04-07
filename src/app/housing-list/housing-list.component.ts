import { Component, EventEmitter, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';
import { SearchHousingService } from '../search-housing.service';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent {
  @Output()
  selectedLocationEvent = new EventEmitter<HousingLocation>();

  constructor(public housingService: SearchHousingService) {}

  searchHousings(term: string) {
    this.housingService.search(term);
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }
}
