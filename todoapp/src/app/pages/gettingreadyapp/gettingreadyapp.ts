import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-gettingreadyapp',
  standalone: true,
  imports: [ CommonModule, FormsModule, ReactiveFormsModule,],
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

}
