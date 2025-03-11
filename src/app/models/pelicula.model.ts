export interface IPelicula {
  title: string;
  overview: string;
  poster_path: string;
  vote_average: number;
}

export interface IRespuestaBusqueda {
  results: IPelicula[];
}
