import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyCompComponent } from './body-comp/body-comp.component';
import { BookingComponent } from './booking/booking.component';
import { EndBookingComponent } from './end-booking/end-booking.component';
import { HomeLoggedInComponent } from './home-logged-in/home-logged-in.component';
import { LogInComponent } from './log-in/log-in.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProgrammTicketComponent } from './programm-ticket/programm-ticket.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {path: 'booking/:userId/:id', component: BookingComponent},
  {path: 'home/:id', component: NavbarComponent},
  {path: 'home', component: NavbarComponent},
  {path: 'home-loggedId/:id', component: HomeLoggedInComponent},
  {path: 'body', component: BodyCompComponent},
  {path: 'programm-ticket', component: ProgrammTicketComponent},
  {path: 'end-booking', component: EndBookingComponent},
  {path: 'log-in', component: LogInComponent},
  
  {path: 'register', component: RegisterComponent},
  { path: '',  redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


 }
