import { Component, OnInit} from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('divState', [
      state('show', style({
        opacity: 1
      })),
      state('hide', style({
        opacity: 0
      })),
      transition('hide => show', animate('600ms ease-in')),
      transition('show => hide', animate('600ms ease-out'))
    ])
  ] 
})
export class HomeComponent implements OnInit {

  state = 'hide';

  constructor() { }

  ngOnInit() {
  }

  animate1() {
    this.state == 'hide' ? this.state = 'show' : this.state = 'hide';
  }

}
