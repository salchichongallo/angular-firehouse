import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchHousingService } from './search-housing.service';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { HouseViewComponent } from './house-view/house-view.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    HouseViewComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [SearchHousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
