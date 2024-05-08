import { Component, OnInit, OnDestroy } from '@angular/core';
import { LibrosServices } from '../services/libros.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html'
})

export class LibrosComponent implements OnInit, OnDestroy{

  libros = []

  constructor(private librosService: LibrosServices){}

  private librosSubscription: Subscription;

  guardarLibro(f){
    if(f.valid){
      this.librosService.agregarLibro(f.value.nombreLibro);
    }
  }

  ngOnInit(){

    this.libros = this.librosService.obtenerLibros();
    this.librosSubscription = this.librosService.librosSubject.subscribe( () => {
      this.libros = this.librosService.obtenerLibros();
    });
  }

  ngOnDestroy(){
    this.librosSubscription.unsubscribe();
  }

}
