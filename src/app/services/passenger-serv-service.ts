import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface passenger{
    id?: number;
    firstName: String;
    lastName: String;
    email: String;
}

@Injectable({
  providedIn: 'root'
})
export class PassServService {

  constructor( private http: HttpClient ) { }
  url: string = "http://localhost:9090//api/passengers/"

  obtenerPassenger(): Observable<passenger[]>{
    return this.http.get<passenger[]>( this.url + "getPassengers")
  }

  crearPassenger( pasajero: passenger ): Observable<passenger>{
    return this.http.post<passenger>( this.url + "createPassenger", pasajero )
  }

  obtenerPassengersporid(): Observable<passenger[]>{
    return this.http.get<passenger[]>( this.url + "getPassenger/{id}")
  }

  


}