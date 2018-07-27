import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Joke} from '../models/joke';

@Component({
  selector: 'app-joke-form',
  templateUrl: './joke-form.component.html',
  styleUrls: ['./joke-form.component.css']
})
export class JokeFormComponent implements OnInit {
  @Output() jokeCreated = new EventEmitter<Joke>();
  @ViewChild('setup') setup: ElementRef;
  @ViewChild('punchline') punchline: ElementRef;

  constructor() { }

  ngOnInit() {
  }
  addJoke(setupVal: string, punchlineVal: string) {
    console.log('setup ', this.setup.nativeElement);
    console.log('punchline ', this.punchline.nativeElement);
    // this.jokeCreated.emit(new Joke(setupVal, punchlineVal));
    this.jokeCreated.emit(new Joke(
      this.setup.nativeElement.value,
      this.punchline.nativeElement.value
    ));
  }
}
