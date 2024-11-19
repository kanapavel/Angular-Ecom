import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './components/shop.component';

const routes: Routes = [
  {
    path:'',
    component:ShopComponent,
  },
  {
    path:'details-product/:id',
    loadComponent:()=>import('../details-products/components/details-products.component').then(c=>c.DetailsProductsComponent)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopRoutingModule { }
