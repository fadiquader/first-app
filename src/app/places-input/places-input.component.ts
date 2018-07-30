import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-places-input',
  templateUrl: './places-input.component.html',
  styleUrls: ['./places-input.component.css']
})
export class PlacesInputComponent implements OnInit {
  place: any;
  constructor() { }

  ngOnInit() {
  }
  selectPlace(place: Object) {
    this.place = place;
    console.log('place ', place)
  }
}
