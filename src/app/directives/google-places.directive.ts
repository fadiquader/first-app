import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ChangeDetectorRef} from '@angular/core';

declare var google;

@Directive({
  selector: '[appGooglePlaces]'
})
export class GooglePlacesDirective implements OnInit {
  gPlaces: any;
  @Output('appGooglePlaces') selectPlace: EventEmitter<Object> = new EventEmitter<Object>();
  constructor(private el: ElementRef, private checkChanges: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.gPlaces = new google.maps.places.Autocomplete(this.el.nativeElement, { types: []});
    google.maps.event.addListener(this.gPlaces, 'place_changed', () => {
      this.selectPlace.emit(this.gPlaces.getPlace());
      // https://stackoverflow.com/questions/34827334/triggering-change-detection-manually-in-angular;
      // this.checkChanges.detectChanges();
      // console.log(this.gPlaces.getPlace());
    });
  }
}
