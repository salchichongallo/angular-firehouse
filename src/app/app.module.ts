import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { SearchHousingService } from './search-housing.service';

@NgModule({
  declarations: [AppComponent, HousingListComponent],
  imports: [BrowserModule],
  providers: [SearchHousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
