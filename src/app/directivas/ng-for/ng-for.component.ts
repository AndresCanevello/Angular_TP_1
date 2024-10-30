import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-for',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ng-for.component.html',
  styleUrl: './ng-for.component.css'
})
export class NgForComponent {

  estudiantes =[
    {id:1 , nombre:'andru'},
    {id:2 , nombre:'gonza'},
    {id:3 , nombre:'fausto'},
    {id:4 , nombre:'joaco'}
  ]
  color= 'red';

}
