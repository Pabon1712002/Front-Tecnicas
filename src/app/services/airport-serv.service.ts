import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface aeropuerto{
  id?: number;
  name: string;
  iataCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class AirportServService {

  constructor( private http: HttpClient ) { }
  url: string = "http://localhost:9090/api/airports/"

  obtenerAeropuertos(): Observable<aeropuerto[]>{
    return this.http.get<aeropuerto[]>( this.url + "getAirports")
  }

  crearAeropuerto( airpor: aeropuerto ): Observable<aeropuerto>{
    return this.http.post<aeropuerto>( this.url + "createAirport", airpor )
  }

  obtenerAeropuertosporid(): Observable<aeropuerto[]>{
    return this.http.get<aeropuerto[]>( this.url + "getAirport/{id}")
  }

  


}
