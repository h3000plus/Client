import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-password',
  templateUrl: './register-password.component.html',
  styleUrl: './register-password.component.scss'
})
export class RegisterPasswordComponent {
  passwordForm: FormGroup;
  // private message = inject(MessageService);

  constructor(
    private router: Router,
    // private customerService: CustomerServicesService,
    private formBuilder: FormBuilder
  ) {
    this.passwordForm = this.formBuilder.group({
      newPassword: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]],
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

  isNotMatched: boolean = false;
  localEmail: any;

  /**
   * Handles the click event of the login button.
   * If the login form is valid, it sends a request to the server to log in the customer.
   * If the login is successful, it saves the access token and navigates to the home page.
   * If the login fails, it displays an error message.
   */
  handleNextClick(): void {

    if (this.passwordForm.valid) {
      const user = this.passwordForm.value;
      this.localEmail = JSON.parse(localStorage.getItem('email') as any);

      if (user.newPassword === user.confirmPassword) {
        const newUser = { password: user.newPassword, email: this.localEmail.email };
        localStorage.setItem('user', JSON.stringify(newUser));
        this.router.navigate(['customer/date-of-birth']);
      }
      else {
        this.isNotMatched = true;
      }

    }
  }

  back() {
    this.router.navigate(['customer/enter-email'])
  }
}
