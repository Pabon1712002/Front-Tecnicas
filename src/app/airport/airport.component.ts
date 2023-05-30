import { Component, OnInit } from '@angular/core';
import {AirportServService } from '../services/airport-serv.service';
@Component({
  selector: 'app-airport',
  templateUrl: './airport.component.html',
  styleUrls: ['./airport.component.css']
})
export class AirportComponent implements OnInit{

  aeropuerto = {
    id: 1,
    iataCode: '123',
    name: 'Alfonso Bonilla'
  };

  constructor( private airServ: AirportServService ){}
  ngOnInit(): void {
    

    this.airServ.crearAeropuerto( this.aeropuerto).subscribe( res =>{
      console.log("Post -> ", res )

      this.airServ.obtenerAeropuertos().subscribe( res2 =>{
        console.log("get -> ", res2)

        this.airServ.obtenerAeropuertosporid().subscribe( res3 =>{
          console.log("get -> ", res3)
        })
      })
    })
  }

}
