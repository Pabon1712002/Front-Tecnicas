import { Component, OnInit } from '@angular/core';
import {FlightServService } from '../services/flight-serv.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.css']
})
export class FlightComponent implements OnInit{

  vuelo = {
    flightNumber: '123',
    departureDate: new Date(),
    departureAirportId: 6,
    arrivalDate: new Date(),
    arrivalAirportId: 1
  };
  
  constructor( private flightServ: FlightServService ){}
  ngOnInit(): void {
    

    this.flightServ.crearFlights( this.vuelo).subscribe( res =>{
      console.log("Post -> ", res )

      this.flightServ.obtenerFlights().subscribe( res2 =>{
        console.log("get -> ", res2)

        this.flightServ.obtenerFlightsporid().subscribe( res3 =>{
          console.log("get -> ", res3)
        })
      })
    })
  }

}
