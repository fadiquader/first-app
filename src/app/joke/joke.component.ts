import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Joke} from '../models/joke';

/*
1- ViewEncapsulation.Emulated: angular changes our generic css class selector to one that target,
just a single component type by using automatically generated attributes.
 but  still inherits global styles
2- ViewEncapsulation.Native: styles we set on a component do not leak outside of the components scope.
3 - ViewEncapsulation.None: And If we don’t want to have any encapsulation at all
 */

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css'],
  // encapsulation: ViewEncapsulation.Emulated,
  // encapsulation: ViewEncapsulation.Native,
  encapsulation: ViewEncapsulation.None,
})
export class JokeComponent implements OnInit {
  @Input() data: Joke;
  constructor() {
  }

  ngOnInit() {
  }

}
