import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeAgo'
})
export class TimeAgoPipe implements PipeTransform {

 transform(value: Date | string): string {
    const now = new Date();
    const inputDate = new Date(value);
    const diffMs = now.getTime() - inputDate.getTime();

    const seconds = Math.floor(diffMs / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (seconds < 60) {
      return 'Actualizado hace unos segundos';
    } else if (minutes < 60) {
      return `Actualizado hace ${minutes} min`;
    } else if (hours < 24) {
      return `Actualizado hace ${hours} hora(s)`;
    } else {
      return `Actualizado hace ${days} día(s)`;
    }
  }

}
