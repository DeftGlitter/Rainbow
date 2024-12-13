import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-jugador-card',
  templateUrl: './jugador-card.component.html',
  styleUrls: ['./jugador-card.component.css']
})
export class JugadorCardComponent implements OnInit {

  @Input() jugador:any; //recibe datos del jugador
  constructor() { }

  ngOnInit(): void {
  }

}
