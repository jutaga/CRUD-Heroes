import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroe.interface';

@Pipe({
  name: 'imagen',
  // pure: false
  // el pure es para que el pipe se dispare en cada ciclo de deteccion de cambios de angular , se pone en false, no es buena por que consume mas recursos
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: Heroe): string {

    if (!heroe.id && !heroe.alt_img) {
      return '../assets/no-image.png'
    } else if (heroe.alt_img) {
      return heroe.alt_img;
    } else {
      return `assets/heroes/${heroe.id}.jpg`;
    }
  }
}
