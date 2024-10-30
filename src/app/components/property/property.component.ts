import { Component } from '@angular/core';

@Component({
  selector: 'app-property',
  standalone: true,
  imports: [],
  templateUrl: './property.component.html',
  styleUrl: './property.component.css'
})
export class PropertyComponent {

   imgUrl : String = 'https://angular.io/assets/images/logos/angular/angular.png' //atributo de la clase que hace asignacion

    producto:any = {
      id:1,
      slug: "notebook-asus",
      url: 'https://angular.io/assets/images/logos/angular/angular.png',
      width:200,
    }

    color:string = 'red'

}
