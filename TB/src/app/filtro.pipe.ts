import { Pipe, PipeTransform } from '@angular/core';
import { Super } from './super';
@Pipe({
  name: 'filtro',
  standalone: true,
})
export class FiltroPipe implements PipeTransform {
  transform(arreglo: Super[], buscar: string): Super[] {
    if (buscar == '') {
      return arreglo;
    }

    let nuevo: Super[] = [];
    for (let i of arreglo) {
      if (i.nombre.toLowerCase().indexOf(buscar.toLowerCase()) != -1) {
        nuevo.push(i);
      }
    }
    return nuevo;
  }
}
