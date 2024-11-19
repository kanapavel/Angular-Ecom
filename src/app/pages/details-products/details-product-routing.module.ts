import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsProductsComponent } from './components/details-products.component';

const routes: Routes = [
  {
    path:'details-product/:id',
    component:DetailsProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DetailsProductRoutingModule { }
