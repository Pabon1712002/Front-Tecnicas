import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AirportComponent } from './airport/airport.component';
import { FlightComponent } from './flight/flight.component';
import { PassengerComponent } from './passenger/passenger.component';
import { PlaneComponent } from './plane/plane.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes=[
  {path:'', component:AppComponent},
  {path:'airport', component:AirportComponent},
  {path:'passenger', component:PassengerComponent},
  {path:'flight', component:FlightComponent},
  {path:'reservation', component:ReservationComponent},
  {path:'plane', component:PlaneComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
