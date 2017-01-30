import { Route } from '@angular/router';
import { LandingComponent } from './landing/landing/landing.component'
import { LoginComponent } from './login/login.component';



export const routerConfig: Route[] =[
 {
     path:'landing',
     component: LandingComponent
 },
 {
     path:'ingreso',
     component:LoginComponent
 },
 {
     path:'',
     redirectTo:'landing',
     pathMatch:'full'
 },
 {
     path:'**',
     redirectTo:'landing'
 }
    
]