import { Component } from '@angular/core';

import { persona } from './persona';

@Component({
  selector: 'app-contador',
  templateUrl: './contador.component.html',
  styleUrls: ['./contador.component.css']
})
export class ContadorComponent {

  persona:persona = {
    nombre: `daniel montoya`,
    edad: 22,
  }

}
