import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlacesInputComponent } from './places-input.component';

describe('PlacesInputComponent', () => {
  let component: PlacesInputComponent;
  let fixture: ComponentFixture<PlacesInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlacesInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlacesInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
