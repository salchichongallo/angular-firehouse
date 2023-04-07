import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HouseViewComponent } from '../house-view/house-view.component';

const routes: Routes = [
  {
    path: 'search/:houseSlug',
    component: HouseViewComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
