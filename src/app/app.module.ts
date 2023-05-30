import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AirportComponent } from './airport/airport.component';
import { HttpClientModule } from '@angular/common/http';
import { PassengerComponent } from './passenger/passenger.component';
import { FlightComponent } from './flight/flight.component';
import { ReservationComponent } from './reservation/reservation.component';
import { PlaneComponent } from './plane/plane.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes:Routes=[
  {path:'', component:AppComponent},
  {path:'airport', component:AirportComponent},
  {path:'passenger', component:PassengerComponent},
  {path:'flight', component:FlightComponent},
  {path:'reservation', component:ReservationComponent},
  {path:'plane', component:PlaneComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    AirportComponent,
    PassengerComponent,
    FlightComponent,
    ReservationComponent,
    PlaneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
