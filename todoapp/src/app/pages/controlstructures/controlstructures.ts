import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Task } from './../../models/task.model';

@Component({
  selector: 'app-controlstructures',
  imports: [ CommonModule ],
  templateUrl: './controlstructures.html',
  styleUrl: './controlstructures.css'
})
export class Controlstructures {
  tasks1 = signal<string[]>(
    [
      'Instalar Angular', 
      'Create proyect',
      'Create component',
      'create service'
    ]
  );

  tasks = signal<string[]>(
    [
      'Instalar Angular', 
      'Create proyect',
      'Create component',
      'create service'
    ]
  );

   taskInterface = signal<Task[]> ([
    {
      id: Date.now(),
      title: "Create project",
      completed: false,
    },
    {
      id: Date.now(),
      title: "Crete component",
      completed: true,
    }
  ]);
  
  changeHandler(event: Event){
      const input = event.target as HTMLInputElement;
      const newTask = input.value;
      this.tasks.update((tasks) =>  [...tasks, newTask]);
  }

  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index));
  }


  changeHandlerInter(event: Event){
        const input = event.target as HTMLInputElement;
        const newTask = input.value;
        this.addTask(newTask);
    }
    

  addTask(title: string){
      const newTask = {
        id: Date.now(),
        title, 
        completed: false,
      };
      this.taskInterface.update((taskInterface) => [...taskInterface, newTask]);
    }

    deleteTaskInter(index: number){
      this.taskInterface.update((taskInterface) => taskInterface.filter((task, position) => position !== index ));
    }
}
