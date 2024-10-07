import { Component } from '@angular/core';

@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css']
})
export class CinepolisComponent {
  nombre: string = '';
  cantidadCompradores: number = 1;
  cantidadBoletos: number = 0;
  tarjetaCineco: boolean = false;
  total: number = 0; 
    
  calcularTotal() {
    const precioBoleto = 12.00;
    const boletosPorPersona = 7;
    const boletosMaximos = this.cantidadCompradores * boletosPorPersona;
    if (this.cantidadBoletos < 1) {
      alert('Debes comprar al menos 1 boleto.');
      return;
    }
    if (this.cantidadBoletos > boletosMaximos) {
      alert(`Cada persona puede comprar hasta 7 boletos. Como tienes ${this.cantidadCompradores} personas, puedes comprar hasta ${boletosMaximos} boletos en total.`);
      return;
    }
    let total = this.cantidadBoletos * precioBoleto;
    if (this.cantidadBoletos >= 3 && this.cantidadBoletos < 5) {
      total *= 0.90;
    }
    if (this.cantidadBoletos >= 5) {
      total *= 0.85;
    }
    if (this.tarjetaCineco) {
      total *= 0.90; 
    }
    this.total = total;
  }
  salir() {
    console.log('Saliendo...');
  }
}