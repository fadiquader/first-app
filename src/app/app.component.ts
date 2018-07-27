import { Component } from '@angular/core';
import {Joke} from './models/joke';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WAMD';
  conentProjectedJoke: Joke;
  constructor() {
    this.conentProjectedJoke = new Joke('setup content', 'punchline content')
  }
}
