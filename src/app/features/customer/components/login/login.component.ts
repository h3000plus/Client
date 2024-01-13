import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from '../../../../services/customer.service';
// import { CustomerServicesService } from '../../services/customer-services.service';
// import { MessageService } from 'src/app/services/message.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  emailForm: FormGroup;
  // private message = inject(MessageService);

  constructor(
    private router: Router,
    private _customerService: CustomerService,
    private formBuilder: FormBuilder
  ) {
    this.emailForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  exist: boolean = false;

  /**
   * Checks if a form field is invalid based on its name.
   * @param fieldName The name of the form field to check.
   * @returns True if the field is invalid and has been touched or modified, false otherwise.
   */
  isFieldInvalid(fieldName: string): boolean {
    const fieldControl = this.emailForm.get(fieldName);
    if (fieldControl) {
      return (
        fieldControl.invalid && (fieldControl.dirty || fieldControl.touched)
      );
    }
    return false;
  }

  /**
   * Handles the click event of the login button.
   * If the login form is valid, it sends a request to the server to log in the customer.
   * If the login is successful, it saves the access token and navigates to the home page.
   * If the login fails, it displays an error message.
   */
  handleNextClick(): void {
    if (this.emailForm.valid) {
      const _email = this.emailForm.value;
      localStorage.setItem('email', JSON.stringify(_email));
      this._customerService.isExistEmail(_email).subscribe(
        (data) => {
          if (data.exists) {
            this.router.navigate(['customer/login-password']);
          }
          else {
            this.router.navigate(['customer/register-password']);
          }
        }
      )

    }

  }

}

// constructor( private router: Router, private _deliveryService: DeliveryService) {}

//   restaurants: Restaurant[] = []
//   ngOnInit(){
//     this._deliveryService.deliveryRestaurants().subscribe( data => this.restaurants = data)
//   }