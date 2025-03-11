import { Component } from '@angular/core';
import { PeliculaService } from '../../services/pelicula.service';
import { IPelicula } from '../../models/pelicula.model';

@Component({
  selector: 'app-busqueda',
  standalone: false,
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  query: string = '';   // Término de búsqueda por nombre
  genre: string = '';   // Género seleccionado
  peliculas: IPelicula[] = [];
  buscando: boolean = false;

  constructor(private peliculaService: PeliculaService) { }

  buscar() {
    if (!this.query && !this.genre) return; // No hacer nada si no hay ni query ni género seleccionado

    this.buscando = true;

    // Verificar si hay un género seleccionado y hacer la búsqueda por género o nombre
    if (this.genre) {
      this.peliculaService.buscarPorGenero(this.genre).subscribe(data => {
        this.peliculas = data.results;
        this.buscando = false;
      });
    } else if (this.query) {
      this.peliculaService.buscarPeliculas(this.query).subscribe(data => {
        this.peliculas = data.results;
        this.buscando = false;
      });
    }
  }
}

