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

  constructor(public housingService: SearchHousingService) {}

  ngOnInit() {
    this.searchHousings('');
  }

  searchHousings(term: string) {
    this.locations = this.housingService.search(term);
  }
}
