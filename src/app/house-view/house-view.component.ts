import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchHousingService } from '../search-housing.service';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-house-view',
  templateUrl: './house-view.component.html',
  styleUrls: ['./house-view.component.css'],
  providers: [SearchHousingService],
})
export class HouseViewComponent implements OnInit {
  public house: HousingLocation | null = null;

  constructor(
    private route: ActivatedRoute,
    private housing: SearchHousingService,
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const code = params.get('houseCode');
      this.house = this.housing.getBySlug(code!);
    });
  }
}
