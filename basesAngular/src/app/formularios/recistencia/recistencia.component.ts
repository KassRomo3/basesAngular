import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-recistencia',
  templateUrl: './recistencia.component.html',
  styleUrl: './recistencia.component.css'
})

export class RecistenciaComponent {
  resistenciaForm: FormGroup;
  valorResistencia: number = 0;
  valorMaximo: number = 0;
  valorMinimo: number = 0;

  constructor() {
    this.resistenciaForm = new FormGroup({
      color1: new FormControl('', Validators.required),
      color2: new FormControl('', Validators.required),
      color3: new FormControl('', Validators.required),
      tolerancia: new FormControl('', Validators.required),
    });
  }

  calcularResistencia() {
    const banda1 = parseInt(this.resistenciaForm.get('color1')?.value);
    const banda2 = parseInt(this.resistenciaForm.get('color2')?.value);
    const multiplicador = Math.pow(10, parseInt(this.resistenciaForm.get('color3')?.value));
    const tolerancia = parseFloat(this.resistenciaForm.get('tolerancia')?.value) / 100;

    this.valorResistencia = (banda1 * 10 + banda2) * multiplicador;
    this.valorMaximo = this.valorResistencia * (1 + tolerancia);
    this.valorMinimo = this.valorResistencia * (1 - tolerancia);
  }

  getColorName(value: number): string {
    const colores = ['Negro', 'Café', 'Rojo', 'Naranja', 'Amarillo', 'Verde', 'Azul', 'Violeta', 'Gris', 'Blanco'];
    return colores[value];
  }

  getBackgroundColor(value: number): string {
    const coloresHex = [
      '#000000',
      '#8B4513',
      '#FF0000',
      '#FFA500',
      '#FFFF00',
      '#008000',
      '#0000FF',
      '#EE82EE',
      '#808080',
      '#FFFFFF'
    ];
    return coloresHex[value];
  }
}