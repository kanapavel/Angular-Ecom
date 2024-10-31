import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/Home.component';
import { ShopComponent } from './pages/shop/shop.component';
import { StoreComponent } from './pages/stores/store/store.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutUsComponent } from './pages/aboutUs/about-us/about-us.component';
import { Error404Component } from './pages/404Error/error-404/error-404.component';
import { ContactComponent } from './pages/contact/contact/contact.component';
import { SignUpComponent } from './pages/signup/sign-up/sign-up.component';
import { ForgotPwdComponent } from './pages/forgotPwd/forgot-pwd/forgot-pwd.component';
import { SignInComponent } from './pages/signin/sign-in.component';
import { NotificationComponent } from './pages/myAccount/notification/notification/notification.component';
import { DashbordComponent } from './pages/dashboard/dashbord.component';
import { DocumentationComponent } from './pages/docs/documentation.component';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
    },
    {
        path:'shop',
        component:ShopComponent,
    },
    {
        path:'store',
        component:StoreComponent
    },
    {
        path:'blog',
        component:BlogComponent
    },
    {
        path:'about-us',
        component:AboutUsComponent
    },
    {
        path:'404Error',
        component:Error404Component
    },
    {
        path:'contact',
        component:ContactComponent
    },
    {
        path:'signin',
        component:SignInComponent
    },
    {
        path:'signup',
        component:SignUpComponent
    },
    {
        path:'forgotpwd',
        component:ForgotPwdComponent
    },
    {
        path:'notification',
        component:NotificationComponent
    },
    {
        path:'dashboard',
        component:DashbordComponent
    },
    {
        path:'docs',
        component:DocumentationComponent
    }
];
