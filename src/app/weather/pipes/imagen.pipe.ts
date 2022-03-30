import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {
  
  imageURL:string = environment.imageURL

  transform(condition:string) {
    
    switch (condition) {
      case 'Rain':
        return `${this.imageURL}rain.png`;
      case 'Clouds':
        return `${this.imageURL}clouds.png`;
      case 'Mist':
        return `${this.imageURL}clouds.png`;
      case 'Snow':
        return `${this.imageURL}snow.png`;
      case 'Sunny':
        return `${this.imageURL}sun.png`;
      case 'Clear':
        return `${this.imageURL}sun.png`;
    }
    
  }

}
