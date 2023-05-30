import { Component, OnInit } from '@angular/core';
import { PlaneServService } from '../services/plane-serv.service';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.css']
})
export class PlaneComponent implements OnInit{

  plane = {
    id: 123,
    planeNumber: 'string',
    planeName: 'string',
    planeCode: 'string'
  };

  constructor( private planeServ: PlaneServService ){}
  ngOnInit(): void {
    

    this.planeServ.crearAvion( this.plane).subscribe( res =>{
      console.log("Post -> ", res )

      this.planeServ.obtenerAvion().subscribe( res2 =>{
        console.log("get -> ", res2)

        this.planeServ.obtenerAvionporid().subscribe( res3 =>{
          console.log("get -> ", res3)
        })
      })
    })
  }

}

