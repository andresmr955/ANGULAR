import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Task } from './../../models/task.model';
import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-controlstructures',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule,],
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

    tasksInterface = signal<Task[]> ([
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
        this.tasksInterface.update((tasksInterface) => [...tasksInterface, newTask]);
      }
  
    deleteTaskInter(index: number){
      this.tasksInterface.update((tasksInterface) => tasksInterface.filter((task, position) => position !== index ));
    }

    updateTask(index: number){
      this.tasksInterface.update((tasksInterface) => {
        return tasksInterface.map((task, position) => {
          if(position === index) {
            return {
              ...task,
              completed: !task.completed
            }
          }
          return task;
        })
      })
    }

    valor = 4
    name = signal<string> ("Melodie")
      person = signal({
      name:  "Andres",
      age: 6,
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
    })
    changeAge(event:Event){
      const input = event.target as HTMLInputElement;
      const newValue = input.value;
      this.person.update(prevState => {
        return {
          ...prevState, 
          age: parseInt(newValue, 10)
        }
      })

    }

    changeName(event:Event){
      const input = event.target as HTMLInputElement;
      const newValue = input.value;
      this.person.update(prevState => {
        return {
          ...prevState, 
          name: newValue
        }
      })

    }

    nombremodel: string = '';

    colorCtrl = new FormControl()
    constructor(){
        this.colorCtrl.valueChanges.subscribe(value => console.log(value));
      this.correoCtrl.valueChanges.subscribe(valor => {
          console.log('📩 Nuevo valor:', valor);
        });
    }
    tasksValidation = signal<Task[]> ([
      {
        id: Date.now(),
        title: "Create project",
        completed: false,
      }
    ]);

    addTaskvalidation(title: string){
      const newTask = {
        id: Date.now(),
        title, 
        completed: false,
      };
      this.tasksValidation.update((prevState) => [...prevState, newTask]);
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
          this.addTaskvalidation(value);
          this.newTaskCtrl.setValue('')
        }
      }

    correoCtrl = new FormControl('', [
      Validators.required,
      Validators.pattern('^[^@]+@[^@]+\\.[a-z]{2,}$')  // valida formato de correo
    ]);

    widthCrl = new FormControl(50, {
      nonNullable: true,
    });
  
}
