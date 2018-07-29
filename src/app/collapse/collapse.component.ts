import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css']
})
export class CollapseComponent implements OnInit {
  @Input() canCollapse: boolean;
  isCollapsed: boolean;
  constructor() {
    this.isCollapsed = false;
  }

  ngOnInit() {
  }

  toggleCollapse() {
    if (this.canCollapse) {
      this.isCollapsed = !this.isCollapsed;
    }
  }
}
