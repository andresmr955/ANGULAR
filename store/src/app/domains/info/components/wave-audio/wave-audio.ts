import { Component, Input, ViewChild, ElementRef } from '@angular/core';
import WaveSurfer from 'wavesurfer.js';
import  waveSurfer  from 'wavesurfer.js'

@Component({
  selector: 'app-wave-audio',
  imports: [],
  templateUrl: './wave-audio.html',
  styleUrl: './wave-audio.css'
})
export class WaveAudio {

    @Input({required: true}) audioUrl!: string;
    @ViewChild('wave') container!: ElementRef;

    ngAfterViewInit(){
      WaveSurfer.create({
        url: this.audioUrl,
        container: this.container.nativeElement
      })    
    }
}
