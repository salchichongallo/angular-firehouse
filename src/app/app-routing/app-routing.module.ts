import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseViewComponent } from '../house-view/house-view.component';
import { HousingListComponent } from '../housing-list/housing-list.component';

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
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
