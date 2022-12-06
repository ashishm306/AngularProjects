import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneformat'
})
export class PhoneformatPipe implements PipeTransform {

  transform(value: string): string {
    let x = value.substring(0, 4);
    let y = value.substring(4, 8);
    let z = value.substring(8, value.length);
    return `+91 ${x}-${y}-${z}`;
  }

}
