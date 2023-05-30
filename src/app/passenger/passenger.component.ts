import { Component, OnInit } from '@angular/core';
import { PassServService } from '../services/passenger-serv-service';

@Component({
  selector: 'app-passenger',
  templateUrl: './passenger.component.html',
  styleUrls: ['./passenger.component.css']
})
export class PassengerComponent implements OnInit {


  passenger = {
    firstName: "Santiago",
    lastName: "Pabon",
    email: "spabon@outlook.com"


  };

  constructor( private PassService: PassServService ){}
  ngOnInit(): void {
    

    this.PassService.crearPassenger( this.passenger ).subscribe( res =>{
      console.log("Post -> ", res )

      this.PassService.obtenerPassenger().subscribe( res2 =>{
        console.log("get -> ", res2)

        this.PassService.obtenerPassengersporid().subscribe( res3 =>{
          console.log("get -> ", res3)
        })
      })
    })
  }



}
