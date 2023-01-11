import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyCompComponent } from './body-comp/body-comp.component';
import { BookingComponent } from './booking/booking.component';
import { EndBookingComponent } from './end-booking/end-booking.component';
import { HomeLoggedInComponent } from './home-logged-in/home-logged-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavbarComponent } from './navbar/navbar.component';

const routes: Routes = [
  {path: 'booking/:id', component: BookingComponent},
  {path: 'home', component: NavbarComponent},
  {path: 'body', component: BodyCompComponent},
  {path: 'end-booking', component: EndBookingComponent},
  {path: 'log-in', component: LogInComponent},
  {path: 'home-logged-in', component: HomeLoggedInComponent},
  { path: '',  redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
