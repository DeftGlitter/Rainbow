import { Component, OnInit } from '@angular/core';
import { JugadoresService } from 'src/app/service/jugadores.service';

@Component({
  selector: 'app-jugador-list',
  templateUrl: './jugador-list.component.html',
  styleUrls: ['./jugador-list.component.css']
})
export class JugadorListComponent implements OnInit {

  jugadores: any[] = [];
  constructor(private jugadoresService: JugadoresService) { }

  ngOnInit() {
    this.jugadoresService.getJugadores().subscribe((data) => {
      console.log('Datos recibidos:', data);
  
      // Si los datos son un objeto, conviértelos en un arreglo
      if (data && typeof data === 'object' && !Array.isArray(data)) {
        this.jugadores = Object.values(data);  // Convirtiendo el objeto en un arreglo
      } else {
        console.error('Los datos no son un objeto válido o ya son un arreglo');
      }
    });
  }
}   
    
