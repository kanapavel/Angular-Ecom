import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainAccountComponent } from './components/main-account/main-account.component';

const routes: Routes = [
  {
    path:'',
    component:MainAccountComponent,
    children:[
      {
        path:'notification',
        loadComponent:()=>import('../my-account/components/notification/notification.component').then(m=>m.NotificationComponent)
      },
      {
        path:'payment-method',
        loadComponent:()=>import('../my-account/components/payement-method/payement-method.component').then(m=>m.PayementMethodComponent)
      },
      {
        path:'orders',
        loadComponent:()=>import('../my-account/components/orders/orders.component').then(m=>m.OrdersComponent)
      },
      {
        path:'setting',
        loadComponent:()=>import('../my-account/components/setting/setting.component').then(m=>m.SettingComponent)
      },
      {
        path:'address',
        loadComponent:()=>import('../my-account/components/address/address.component').then(m=>m.AddressComponent)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyAccountRoutingModule { }
