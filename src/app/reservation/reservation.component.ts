import { Component, OnInit } from '@angular/core';
import { ReservationServService } from '../services/reservation-serv.service';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reser = {
    id: 1,
    passenger: '',
    flight: ''
  }

  constructor( private ReserService: ReservationServService ){}
  ngOnInit(): void {
    

    this.ReserService.crearReservacion( this.reser ).subscribe( res =>{
      console.log("Post -> ", res )

      this.ReserService.obtenerReservacion().subscribe( res2 =>{
        console.log("get -> ", res2)

        this.ReserService.obtenerReservacionporid().subscribe( res3 =>{
          console.log("get -> ", res3)
        })
      })
    })
  }

}
