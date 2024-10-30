import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-component-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './component-productos.component.html',
  styleUrl: './component-productos.component.css'
})
export class ComponentProductosComponent {
  productos = [
    { id: 1, nombre: 'Producto A', precio: 100 },
    { id: 2, nombre: 'Producto B', precio: 200 },
    { id: 3, nombre: 'Producto C', precio: 300 }
    ];
    titulo: string = '';

    getSuma(numero1 : number, numero2: number){
      return numero1+numero2;

    }
    mostrarTitulo(title : string)
    {
      return title;
    }
}
