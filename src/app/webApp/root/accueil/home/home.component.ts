import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('triggerOpenClose', [
      state('open', style({
        height: '200px', opacity: 1, backgroundColor: 'orange', color: '#FFF'
      })),
      state('closed', style({
        height: '20px', opacity: 0.5, backgroundColor: 'blue', color: '#DDD'
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('2.5s')
      ]),
    ])
  ]
})
export class HomeComponent implements OnInit {

  title: string = 'Formulaires reactives';
  public flag: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  /**
   * Pour lancer l'animation
   */
  public doAnimation(){
    this.flag = ! this.flag;
  }

}
