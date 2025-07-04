import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Counter } from "@shared/components/counter/counter";
import { WaveAudio } from "@info/components/wave-audio/wave-audio";
import { Highlight } from "@shared/directives/highlight";
import { Header } from '@shared/components/header-c/header-c';
@Component({
  selector: 'app-about',
  imports: [CommonModule, Counter, WaveAudio, Highlight],
  templateUrl: './about.html',
  styleUrl: './about.css'
})
export class About {
  duration = signal(0)
  message = signal("Hola")

  changeDuration(event: Event) {
    const input = event.target as HTMLInputElement;
    this.duration.set(input.valueAsNumber) 
  }

   changeMessage(event: Event) {
    const input = event.target as HTMLInputElement;
    this.message.set(input.value)
  }
}
