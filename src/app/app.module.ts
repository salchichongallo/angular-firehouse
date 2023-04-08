import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SearchHousingService } from './search-housing.service';
import { HouseViewComponent } from './house-view/house-view.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HousingListComponent,
  },
  {
    path: ':houseCode',
    component: HouseViewComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    HouseViewComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes, { useHash: true })],
  providers: [SearchHousingService],
  bootstrap: [AppComponent],
})
export class AppModule {}
