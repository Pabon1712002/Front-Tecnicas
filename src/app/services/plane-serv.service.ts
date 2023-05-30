import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface plane{
  id?: number;
  planeNumber: string;
  planeName: string;
  planeCode: string;
}

@Injectable({
  providedIn: 'root'
})
export class PlaneServService {

  constructor( private http: HttpClient ) { }
  url: string = "http://localhost:9090/api/planes/"

  obtenerAvion(): Observable<plane[]>{
    return this.http.get<plane[]>( this.url + "getPlanes")
  }

  crearAvion( avion: plane ): Observable<plane>{
    return this.http.post<plane>( this.url + "createPlane", avion )
  }

  obtenerAvionporid(): Observable<plane[]>{
    return this.http.get<plane[]>( this.url + "getPlane/{id}")
  }
}
