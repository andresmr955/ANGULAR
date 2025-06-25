import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-controlstructures',
  imports: [ CommonModule ],
  templateUrl: './controlstructures.html',
  styleUrl: './controlstructures.css'
})
export class Controlstructures {
  tasks1 = signal(
    [
      'Instalar Angular', 
      'Create proyect',
      'Create component',
      'create service'
    ]
  );

  tasks = signal(
    [
      'Instalar Angular', 
      'Create proyect',
      'Create component',
      'create service'
    ]
  );

  changeHandler(event: Event){
      const input = event.target as HTMLInputElement;
      const newTask = input.value;
      this.tasks.update((tasks) =>  [...tasks, newTask]);
  }

  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }
}
