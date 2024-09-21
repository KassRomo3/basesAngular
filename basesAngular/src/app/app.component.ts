import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html', /*aqui le decimos de donde se va a traer*/
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'basesAngular';

  dobleNumero(x:number):number{
    return x*2;
  }

  alumno={
    nombre:'Juan',
    edad: 25,
    curso:'Angular',
    fechaInscrito: new Date(),
    pago: 2220

  }
}