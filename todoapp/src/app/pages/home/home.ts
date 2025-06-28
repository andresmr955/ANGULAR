import { Component, signal, computed, effect, inject, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormControl, Validators, FormArray} from '@angular/forms';

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
injector = inject(Injector)
 
  
  ngOnInit(){
    const storage = localStorage.getItem('tasks');
    if (storage){
      const tasks = JSON.parse(storage);
      this.tasks.set(tasks)
    }
    this.trackTask();
  }

  trackTask(){
    effect(() => {
      const tasks = this.tasks()
      console.log(tasks);
      localStorage.setItem('tasks', JSON.stringify(tasks));
    }, { injector: this.injector });
  }

  changeHandlerValidation(){
    if(this.newTaskCtrl.valid){
      const value = this.newTaskCtrl.value;
      this.addTask(value);
      this.newTaskCtrl.setValue('')
    }
  }

  anyCtrl = new FormControl(false, {
    nonNullable: true,
    validators: Validators.requiredTrue,
  });

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

  changeFilter(filter: 'all' | 'pending' | 'completed') {
    this.filter.set(filter);
  }

}
