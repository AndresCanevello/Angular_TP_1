import { Component } from '@angular/core';

@Component({
  selector: 'app-event',
  standalone: true,
  imports: [],
  templateUrl: './event.component.html',
  styleUrl: './event.component.css'
})
export class EventComponent {

  contador : number = 0;
  contar(eventoClick: any)
  {
console.log(eventoClick);
    this.contador++;
  }
  cadena:string = ''
 //el click es un evento y el input es un evento
 //cada vez que quiero traer informacion uso esto
  setCadena(eventoInput:any)
  {
    this.cadena= eventoInput.target.value
  }
  cadenaChange:string=''
  changeCadena(eventoChange:any)
  {
    this.cadenaChange = eventoChange.target.value
  }
  key:string=''
  setKey(eventoKey:any)
  {
    this.key = eventoKey.key
    if(this.key.includes('ArrowRight'))
    {
      this.correr();
    }
    else if(this.key.includes('ArrowLeft'))
    {
      this.correrAtras();
    }
  }
  x:number = 0;

correr()
{
  this.x++;
}
correrAtras()
{
  this.x--;
}

}
