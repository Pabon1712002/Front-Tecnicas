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
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
