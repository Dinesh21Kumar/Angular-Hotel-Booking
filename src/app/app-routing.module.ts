import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component'
import { LoginerrorComponent } from './loginerror/loginerror.component'
import { HomepageComponent } from './homepage/homepage.component'
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component'
import { BookingpageComponent } from './bookingpage/bookingpage.component'
import { BookingsuccessComponent } from './bookingsuccess/bookingsuccess.component'
import { NeedAuthGuard } from './auth.guard';


const routes: Routes = [
  {
    path: '',
    component: LoginComponent

  },
  {
    path: 'loginerror',
    component: LoginerrorComponent

  },
  {
    path: 'loginsuccess',
    component: LoginsuccessComponent

  },
  {
    path: 'home',
    component: HomepageComponent,
    canActivate: [NeedAuthGuard] // <---- connected Route with guard
  },
  {
    path: 'bookhotel/:id',
    component: BookingpageComponent,
    canActivate: [NeedAuthGuard]
  },
  {
    path: 'bookingsuccess',
    component: BookingsuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
