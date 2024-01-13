import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ICustomerLogin } from '../../../../shared/models/customerLogin.model';
import { CustomerService } from '../../../../services/customer.service';

@Component({
  selector: 'app-enter-password',
  templateUrl: './enter-password.component.html',
  styleUrl: './enter-password.component.scss'
})
export class EnterPasswordComponent {
  passwordForm: FormGroup;
  emailData: any;
  // private message = inject(MessageService);

  constructor(
    private router: Router,
    private _customerService: CustomerService,
    private formBuilder: FormBuilder
  ) {
    this.passwordForm = this.formBuilder.group({
      // email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  /**
   * Checks if a form field is invalid based on its name.
   * @param fieldName The name of the form field to check.
   * @returns True if the field is invalid and has been touched or modified, false otherwise.
   */
  isFieldInvalid(fieldName: string): boolean {
    const fieldControl = this.passwordForm.get(fieldName);
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
    if (this.passwordForm.valid) {
      const passwordData = this.passwordForm.value.password;
      this.emailData = JSON.parse(localStorage.getItem('email') as any).email;
      const loginData: ICustomerLogin = {
        email: this.emailData,
        password: passwordData
      }
      this._customerService.login(loginData).subscribe(
        (data) => {
          localStorage.setItem('token', JSON.stringify(data.access_token));
          this.router.navigate(['home']);
        }
      );
    }
  }
}
