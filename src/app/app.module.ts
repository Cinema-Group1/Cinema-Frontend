import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { MatIconModule } from '@angular/material/icon';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { BodyCompComponent } from './body-comp/body-comp.component';

import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';


import { HttpClientModule } from '@angular/common/http';
import { PopUpComponent } from './pop-up/pop-up.component';
import { BookingComponent } from './booking/booking.component';
import { CinemaSeatComponent } from './cinema-seat/cinema-seat.component';
import { EndBookingComponent } from './end-booking/end-booking.component';
import { LogInComponent } from './log-in/log-in.component';
import { HomeLoggedInComponent } from './home-logged-in/home-logged-in.component';
import { RegisterComponent } from './register/register.component';
import { ProgrammTicketComponent } from './programm-ticket/programm-ticket.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    BodyCompComponent,
    PopUpComponent,
    BookingComponent,
    CinemaSeatComponent,
    EndBookingComponent,
    LogInComponent,
    HomeLoggedInComponent,
    RegisterComponent,
    ProgrammTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    HttpClientModule,
    MatDialogModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
