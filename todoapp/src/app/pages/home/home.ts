import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
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
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index ));
  }
}
