import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import { AngularPaginatorModule } from 'angular-paginator';
import {MatNativeDateModule,MatDatepickerModule,MatIconModule,MatFormFieldModule,MatInputModule} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { NgDatepickerModule } from 'ng2-datepicker';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginerrorComponent } from './loginerror/loginerror.component';
import { LoginsuccessComponent } from './loginsuccess/loginsuccess.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { HotelService } from './hotel.service';
import { BookingpageComponent } from './bookingpage/bookingpage.component';
import { DatepickerCustomIconExampleComponent } from './datepicker-custom-icon-example/datepicker-custom-icon-example.component';
import { BookingsuccessComponent } from './bookingsuccess/bookingsuccess.component';
import { BookingfailureComponent } from './bookingfailure/bookingfailure.component';
import { NeedAuthGuard } from './auth.guard';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginerrorComponent,
    LoginsuccessComponent,
    HomepageComponent,
    BookingpageComponent,
    DatepickerCustomIconExampleComponent,
    BookingsuccessComponent,
    BookingfailureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule,
    AngularPaginatorModule,         // <----- this module will be deprecated in the future version.
    MatDatepickerModule,        // <----- import(must)
    MatNativeDateModule,        // <----- import for date formating(optional)
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgDatepickerModule
  ],
  providers: [HotelService,NeedAuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
