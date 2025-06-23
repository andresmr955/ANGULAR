import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-labs',
  imports: [CommonModule],
  templateUrl: './labs.html',
  styleUrl: './labs.css'
})
export class Labs {
  protected title = 'todoapp Andres';
  private password = 'secret123';
  // public variables
  tasks = [
    "Install Angular", 
    "Create project", 
    "Create component"
  ]
  name = "andres"
  age = "26"
  

  avatar2 = 'https://www.w3schools.com/howto/img_avatar2.png'
  // Property binding, there is an event but we want to show binding
  disable = false
  
  toggleDisable() {
    this.disable = !this.disable;
    alert('disable is now: ' + this.disable);
  }
  
  nameinput = "You are the best"
  //Working with objects 
  person = {
      name:  "Andres",
      age: "26",
      avatar: 'https://www.w3schools.com/howto/img_avatar.png',
  }

  
//Working with events
  clickHandler(){
    alert("Hello")
  }

  changeHandler(event: Event){
    console.log(event)
  }

  keydownHandler(event: KeyboardEvent){
    const input = event.target as HTMLInputElement;
    console.log(event)
    console.log(input.value)
  }
  // Signals
  namesignal = signal("Camilo");
  agesignal = signal(189);

  changeHandlerSignal(event: Event){
    const input = event.target as HTMLInputElement;
    const newValue = input.value;
    this.namesignal.set(newValue);
    console.log(input.value);
  }

}
