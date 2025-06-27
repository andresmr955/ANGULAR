import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

import { Task } from './../../models/task.model';

@Component({
  selector: 'app-home',
  imports: [ CommonModule, FormsModule, ReactiveFormsModule,],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  
  tasks = signal<Task[]> ([
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
      this.addTask(newTask);
  }
  

  addTask(title: string){
    const newTask = {
      id: Date.now(),
      title, 
      completed: false,
    };
    this.tasks.update((tasks) => [...tasks, newTask]);
  }

  deleteTask(index: number){
    this.tasks.update((tasks) => tasks.filter((task, position) => position !== index ));
  }

  onToggleComplete(task: Task){
    task.completed = !task.completed
    console.log(task.completed)
  }

  newTaskCtrl = new FormControl(
    '', {
      nonNullable: true,
      validators: [
        Validators.required,
        Validators.pattern('^\\S.*$'),
      ]
    }
  )
  changehandlervalidation(){
    if(this.newTaskCtrl.valid){
      const value = this.newTaskCtrl.value;
      this.addTask(value);
      this.newTaskCtrl.setValue('')
    }
  }
}
