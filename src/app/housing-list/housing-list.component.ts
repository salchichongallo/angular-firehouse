import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-list',
  templateUrl: './housing-list.component.html',
  styleUrls: ['./housing-list.component.css'],
})
export class HousingListComponent implements OnInit {
  @Input() locationList: HousingLocation[] = [];

  results: HousingLocation[] = [];

  @Output()
  selectedLocationEvent = new EventEmitter<HousingLocation>();

  ngOnInit() {
    this.results = this.locationList.slice();
  }

  searchHousingLocations(term: string) {
    const byCity = this.makeCityFilter(term.toLowerCase());
    this.results = this.locationList.filter(byCity);
  }

  private makeCityFilter(term: string) {
    return (location: HousingLocation) =>
      location.city.toLowerCase().includes(term);
  }

  selectHousingLocation(location: HousingLocation) {
    this.selectedLocationEvent.emit(location);
  }
}
