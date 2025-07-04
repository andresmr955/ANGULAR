import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Img } from './components/img/img'
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Img],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'my-store';
}
