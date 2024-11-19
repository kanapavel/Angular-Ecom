import { Routes } from '@angular/router';
import { DetailsProductsComponent } from './pages/details-products/components/details-products.component';

export const routes: Routes = [
    {
        path:'home',
        loadChildren: ()=> import('./pages/home/Home.module').then(m => m.HomeModule),
    },
    {
        path:'signup',
        loadChildren:()=> import('../app/pages/sign-up/sign-up.module').then(m =>m.SignUpModule)
    },
    {
        path:'forgotpwd',
        loadChildren:()=> import('../app/pages/forgot-pwd/forgot-pwd.module').then(m=> m.ForgotPwdModule)
    },
    {
        path:'shop',
        loadChildren:()=> import('../app/pages/shop/shop.module').then(m=> m.ShopModule)
    },
    {
        path:'store',
        loadChildren:()=> import('../app/pages/store/store.module').then(m=> m.StoreModule)
    },
    {
        path:'about-us',
        loadChildren:()=> import('../app/pages/about-us/about-us.module').then(m=> m.AboutUsModule)
    },
    {
        path:'contact',
        loadChildren:()=> import('../app/pages/contact/contact.module').then(m=> m.ContactModule)
    },
    {
        path:'signin',
        loadChildren:()=> import('../app/pages/sign-in/sign-in.module').then(m=> m.SignInModule)
    },
    {
        path:'dashboard',
        loadChildren:()=> import('../app/pages/dashboard/dashboard.module').then(m=> m.DashboardModule)
    },
    {
        path:'shop-wishlist',
        loadChildren:()=>import('../app/pages/shop-wishlist/shop-wishlist.module').then(m=>m.ShopWishlistModule)
    },
    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    },
    {
        path:'**',
        loadChildren:()=> import('../app/pages/error404/error404.module').then(m => m.Error404Module)
    }
];
