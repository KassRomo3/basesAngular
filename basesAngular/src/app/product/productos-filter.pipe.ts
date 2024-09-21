import { Pipe, PipeTransform } from '@angular/core';
import {  IProductos } from './productos';

@Pipe({
  name: 'productosFilter'
})
export class ProductosFilterPipe implements PipeTransform {

  transform(value: IProductos[], args:string): IProductos []{
    let filter:string=args ?args.toLocaleLowerCase():"";
    return filter? value.filter((product:IProductos)=>product.Marca.toLocaleLowerCase().indexOf(filter)!=-1
  ):value;
}


}
