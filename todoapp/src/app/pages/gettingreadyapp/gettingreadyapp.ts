import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormArray } from '@angular/forms';
import { Task } from './../../models/task.model';

@Component({
  selector: 'app-gettingreadyapp',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './gettingreadyapp.html',
  styleUrl: './gettingreadyapp.css'
})

export class Gettingreadyapp {
    colorCtrl = new FormControl()
      constructor(){
        this.colorCtrl.valueChanges.subscribe(value => console.log(value));
          };
    
    widthCrl = new FormControl(50, {
    nonNullable: true,
  });

  nameCtrl = new FormControl('Andres', {
    nonNullable: true,
    validators: [ 
      Validators.required,
      Validators.minLength(3),
    ]
  });

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
    onToggleComplete(task: Task){
    task.completed = !task.completed
    console.log(task.completed)
  }
  form: FormArray<FormControl<boolean>> = new FormArray
  (this.tasks().map(task => new FormControl(task.completed, { nonNullable: true})));
}
  