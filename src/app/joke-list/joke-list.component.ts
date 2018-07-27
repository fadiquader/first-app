import {AfterContentInit, AfterViewInit, Component, ContentChild, OnInit, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {Joke} from '../models/joke';
import {JokeComponent} from '../joke/joke.component';

@Component({
  selector: 'app-joke-list',
  templateUrl: './joke-list.component.html',
  styleUrls: ['./joke-list.component.css']
})
export class JokeListComponent implements
  OnInit,
  AfterViewInit
  // AfterContentInit
{
  jokeList: Array<Joke>;
  @ViewChild(JokeComponent) jokeViewChild: JokeComponent;
  @ViewChildren(JokeComponent) jokeViewChildren: QueryList<JokeComponent>;
  // @ContentChild(JokeComponent) contentJoke: JokeComponent;

  constructor() {
    this.jokeList = [
      new Joke('obj #1', 'punchline #1'),
      new Joke('obj #2', 'punchline #2'),
      new Joke('obj #3', 'punchline #3')
    ];
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log('jokeViewChild: ', this.jokeViewChild);
    const joks = this.jokeViewChildren.toArray();
    console.log('jokeViewChildren: ', joks);
    // joks[1].logInput();
  }

  // ngAfterContentInit() {
  //   console.log('Content Joke: ', this.contentJoke);
  // }
  addNewJoke(val: Joke) {
    this.jokeList.unshift(val);
  }

}
