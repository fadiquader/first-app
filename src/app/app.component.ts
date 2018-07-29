import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WAMD';
  isEnabled: boolean;
  constructor() {
    this.isEnabled = true;
  }

  enableCollapse() {
    this.isEnabled = !this.isEnabled;
  }
}
