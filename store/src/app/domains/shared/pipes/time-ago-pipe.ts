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
      return 'Updated a few seconds ago';
    } else if (minutes < 60) {
      return `Updated ${minutes} min ago`;
    } else if (hours < 24) {
      return `Updated ${hours} hour(s) ago`;
    } else {
      return `Updated ${days} days(s) ago`;
    }
  }

}
