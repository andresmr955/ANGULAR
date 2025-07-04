import { Component, signal, computed} from '@angular/core';
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

    updateTaskEditingMode(index: number) {
    if (this.tasks()[index].completed) return;
    this.tasks.update(prevState => {
      return prevState.map((task, position) => {
        if(position === index){
          return {
            ...task,
            editing: true
          }
        }
        return {
          ...task,
          editing: false
        }
      })
    });
  }

  updateTaskText(index: number, event: Event) {
    const input = event.target as HTMLInputElement;
    this.tasks.update(prevState => {
      return prevState.map((task, position) => {
        if(position === index){
          return {
            ...task,
            title: input.value,
            editing: false,
          }
        }
        return task
      })
    });
  }

  filter = signal<'all' | 'pending' | 'completed'>('all')
    tasksByFilter = computed(() => {
      const filter = this.filter();
      const tasks = this.tasks();
      if (filter === 'pending') {
        return tasks.filter(task => !task.completed);
      }
      if (filter === 'completed') {
        return tasks.filter(task => task.completed);
      }
      return tasks;
    })

  changeFilter(filter: 'all' | 'pending' | 'completed') {
    this.filter.set(filter);
  }

  name = "andres"
  age = 8
  tasks1 = signal<string[]>(
      [
        'Instalar Angular', 
        'Create proyect',
        'Create component',
        'create service'
      ]
    );

    person = signal ({
      name: "Andres", 
      age: 50
    });
     changeName(event:Event){
      const input = event.target as HTMLInputElement;
      const newValue = input.value;
      this.person.update(prevState => {
        return {
          ...prevState, 
          name: newValue
        }
      })}
}
  