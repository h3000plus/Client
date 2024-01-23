import { Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  signupForm: FormGroup;

  constructor(
    private router: Router,

    private formBuilder: FormBuilder
  ) {
    this.signupForm = this.formBuilder.group({
      address: ['', [Validators.required]],
      // password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  @ViewChild('mapSearchField') searchField: ElementRef | undefined;
  ngAfterViewInit(): void {
    const searchBox = new google.maps.places.SearchBox(
      this.searchField?.nativeElement
    );

    searchBox.addListener('places_changed', () => {
      const places = searchBox.getPlaces();
      if (places?.length === 0) {
        return;
      }
      places?.forEach((place) => {
        console.log(place.name, place.address_components);
        console.log(
          place.geometry?.location?.lat(),
          place.geometry?.location?.lng()
        );
      });
    });
  }

  isFieldInvalid(fieldName: string): boolean {
    const fieldControl = this.signupForm.get(fieldName);
    if (fieldControl) {
      return (
        fieldControl.invalid && (fieldControl.dirty || fieldControl.touched)
      );
    }
    return false;
  }

  handleNextClick() {

  }
}
