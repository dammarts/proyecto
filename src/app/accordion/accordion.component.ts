import { Component } from '@angular/core';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css'],
  
})
export class AccordionComponent {
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];
  expandedIndex = 0;
}
