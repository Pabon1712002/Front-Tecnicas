import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Reservation{
  id?: number;
}

@Injectable({
  providedIn: 'root'
})
export class ReservationServService {

  constructor( private http: HttpClient ) { }
  url: string = "http://localhost:9090/api/reservations/"

  obtenerReservacion(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>( this.url + "getReservations")
  }

  crearReservacion( reser: Reservation ): Observable<Reservation>{
    return this.http.post<Reservation>( this.url + "createReservation", reser )
  }

  obtenerReservacionporid(): Observable<Reservation[]>{
    return this.http.get<Reservation[]>( this.url + "getReservation/{id}")
  }

}