import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JugadoresService {
  private jsonURL = 'assets/operators.json'; // Ruta al JSON

  constructor(private http: HttpClient) {}

  getJugadores(): Observable<any>{
    return this.http.get(this.jsonURL)
  }
}
