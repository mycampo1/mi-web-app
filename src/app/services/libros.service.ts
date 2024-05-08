import { Subject } from "rxjs";

export class LibrosServices{

  librosSubject = new Subject();

  private libros = ['Libro de Alcasec', 'Libro de Algoritmos', 'El Grafico Revista']

  agregarLibro(libroNombre: string){
    this.libros.push(libroNombre);
    this.librosSubject.next();
  }

  eliminarLibro(libroNombre: string){
    this.libros = this.libros.filter( x => x !== libroNombre);
    this.librosSubject.next();
  }

  obtenerLibros(){
    return [...this.libros];
  }

}
