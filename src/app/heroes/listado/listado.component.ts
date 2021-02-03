import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent implements OnInit {

  constructor() {

   }

  ngOnInit(): void {

  }

  heroeBorrado: string = '';
  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitan America'];



  borrarHeroe()  {
    this.heroeBorrado  = this.heroes.shift() || '';



  }


}
