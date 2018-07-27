import {
  AfterContentChecked, AfterContentInit,
  AfterViewChecked, AfterViewInit,
  Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges
} from '@angular/core';
import {Joke} from '../models/joke';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnChanges,
  OnInit, AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
{
  @Input() data: Joke;
  // @Input() isSelected: boolean;
  // @Output() selectJoke: EventEmitter<Joke> = new EventEmitter<Joke>();

  constructor() {
    console.log(`constructor: data, ${this.data}`);
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(`ngOnChanges: data, ${JSON.stringify(this.data)}`);
    for(let key in changes) {
      console.log(`ngOnChanges: key `, key);
      console.log(`ngOnChanges: currentValue `, changes[key].currentValue);
      console.log(`ngOnChanges: previousValue `, changes[key].previousValue);
    }
  }
  ngOnInit() {
    console.log(`ngOnChanges: data, ${JSON.stringify(this.data)}`);
  }

  ngAfterContentInit() {
    console.log(`ngAfterContentInit`);
  }
  ngAfterContentChecked() {
    console.log(`ngAfterContentChecked`);
  }
  ngAfterViewInit() {
    console.log(`ngAfterViewInit`);
  }
  ngAfterViewChecked() {
    console.log(`ngAfterViewChecked`);
  }
  ngOnDestroy() {
    console.log(`ngOnDestroy`);
  }
  // select() {
  //   this.selectJoke.emit(this.data);
  // }

}
