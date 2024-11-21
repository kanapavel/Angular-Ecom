import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WishlistComponent } from './components/wishlist.component';

const routes: Routes = [
  {
    path:'',
    component:WishlistComponent,
    children:[
      {
        path:'contact',
        loadChildren:()=> import('../contact/contact.module').then(m=> m.ContactModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShopWishlistRoutingModule { }
