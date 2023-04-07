import { Component } from '@angular/core';
import { HousingLocation } from './housing-location';
import { SearchHousingService } from './search-housing.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Fairhouse';

  selectedLocation: HousingLocation | undefined;

  constructor(public housing: SearchHousingService) {}

  updateSelectedLocation(location: HousingLocation) {
    this.selectedLocation = location;
  }
}
