import { Component } from '@angular/core';
import { IProductos } from '../productos';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {

  imageWidth:number=60;
  imageMargin:number=2;
  muestraImg:boolean=true
  listFilter:string=''

  muestImg():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:any[]=[
    {
      "ProductoId":1,
      "Modelo":"sentra",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":2024,
      "Marca":"NISSAN",
      "Color":"AZUL",
      "ImagenUrl":"https://acroadtrip.blob.core.windows.net/catalogo-imagenes/l/RT_V_4b4578b2047947618873ae0665be3a54.webp"
    },
    {
      "ProductoId":2,
      "Modelo":"sentra",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":2024,
      "Marca":"AUDI",
      "Color":"ROJO",
      "ImagenUrl":"https://mediaservice.audi.com/media/cdb/data/9d8af4fa-0660-46d7-af57-6d047e290e8d.jpg"
    },
    {
      "ProductoId":1,
      "Modelo":"Rio",
      "Descripcion":"4 puertas",
      "Precio": 20000,
      "Year":2024,
      "Marca":"KIA",
      "Color":"BLANCO",
      "ImagenUrl":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyyEDZONFNpu2_VA-dIw5jla_yPc_H1N1M4g&s"
    }
  ]
}