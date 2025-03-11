import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {
  private apiUrl = 'https://api.themoviedb.org/3/';
  private apiKey = '0ef703ba75fad2d39d2b8752ee169f5f';

  constructor(private http: HttpClient) { }

  buscarPeliculas(query: string): Observable<any> {
    return this.http.get(`${this.apiUrl}search/movie?api_key=${this.apiKey}&query=${query}&language=es-ES`);
  }

  buscarPorGenero(genreId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}discover/movie?api_key=${this.apiKey}&with_genres=${genreId}&language=es-ES`);
  }
}


