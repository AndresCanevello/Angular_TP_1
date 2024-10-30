import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ComponentPrimerComponentComponent } from './component-primer-component/component-primer-component.component';
import { ComponentProductosComponent } from './component-productos/component-productos.component';
import { PropertyComponent } from './components/property/property.component';
import { NgForComponent } from './directivas/ng-for/ng-for.component';
import { EventComponent } from './components/event/event.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, //este campo es el que me permite ami utilizar rutas, debido a que es el componente principal
     CommonModule, 
     ComponentPrimerComponentComponent,
     ComponentProductosComponent,
     PropertyComponent,
     NgForComponent,
     EventComponent
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MiPrimerAngular';
}
