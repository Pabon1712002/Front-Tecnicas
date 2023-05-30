import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface flight{
     id?: number;
     flightNumber: String;
     departureDate: Date;
     departureAirportId: number;
     arrivalDate: Date;
     arrivalAirportId: number;
}

@Injectable({
  providedIn: 'root'
})
export class FlightServService {

  constructor( private http: HttpClient ) { }
  url: string = "http://localhost:9090//api/flights/"

  obtenerFlights(): Observable<flight[]>{
    return this.http.get<flight[]>( this.url + "getFlights")
  }

  crearFlights( vuelo: flight ): Observable<flight>{
    return this.http.post<flight>( this.url + "createFlight", vuelo )
  }

  obtenerFlightsporid(): Observable<flight[]>{
    return this.http.get<flight[]>( this.url + "getFlight/{id}")
  }

  


}