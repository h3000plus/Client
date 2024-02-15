import { Component, ElementRef, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ICustomer } from '../../../../shared/models/customer.model';
import { CustomerService } from '../../../../services/customer.service';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrl: './address.component.scss'
})
export class AddressComponent {
  addressForm: FormGroup;
  // private message = inject(MessageService);

  constructor(
    private router: Router,
    private _customerService: CustomerService,
    private formBuilder: FormBuilder
  ) {
    this.addressForm = this.formBuilder.group({
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

  /**
   * Checks if a form field is invalid based on its name.
   * @param fieldName The name of the form field to check.
   * @returns True if the field is invalid and has been touched or modified, false otherwise.
   */
  isFieldInvalid(fieldName: string): boolean {
    const fieldControl = this.addressForm.get(fieldName);
    if (fieldControl) {
      return (
        fieldControl.invalid && (fieldControl.dirty || fieldControl.touched)
      );
    }
    return false;
  }

  emailData: string = "";
  passwordData: string = "";

  /**
   * Handles the click event of the login button.
   * If the login form is valid, it sends a request to the server to log in the customer.
   * If the login is successful, it saves the access token and navigates to the home page.
   * If the login fails, it displays an error message.
   */
  handleNextClick(): void {
    if (this.addressForm.valid) {
      const addresData = this.addressForm.value.address;
      this.emailData = JSON.parse(localStorage.getItem('user') as any).email;
      this.passwordData = JSON.parse(localStorage.getItem('user') as any).password;
      const user: ICustomer = {
        address: addresData,
        email: this.emailData,
        password: this.passwordData
      }
      this._customerService.signup(user).subscribe(
        (data) => {
          if (data.messeag === 'added') {
            this.router.navigate(['home']);
          }
        }
      );
    }
  }

  back() {
    this.router.navigate(['customer/tasty-tags'])
  }


}
