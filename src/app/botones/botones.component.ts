import { Component } from '@angular/core';

@Component({
  selector: 'app-botones',
  templateUrl: './botones.component.html',
  styleUrls: ['./botones.component.css']
})
export class BotonesComponent {

   src = {
   imagen1: 'https://images.pexels.com/photos/16960416/pexels-photo-16960416/free-photo-of-mar-paisaje-cielo-playa.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load',
   imagen2: 'https://images.pexels.com/photos/16638256/pexels-photo-16638256/free-photo-of-soleado-playa-verano-sol.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load'
  }

  img:string = "https://images.pexels.com/photos/16977664/pexels-photo-16977664/free-photo-of-el-cielo-tambien-es-lila.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load"

}
