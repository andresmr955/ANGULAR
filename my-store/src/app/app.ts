import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Img } from './components/img/img'
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Img, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  imgParent = 'my-store';
  imgRandom = 'https://picsum.photos/200'
  //https://www.w3schools.com/howto/img_avatar.png
  imgInput = ''

  onLoaded(greet: string){
    console.log("log parent", greet);
    
  }
}
