import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
// import { DatePipe } from '@angular/common';


@Component({
  selector: 'app-date-of-birth',
  templateUrl: './date-of-birth.component.html',
  styleUrl: './date-of-birth.component.scss'
})
export class DateOfBirthComponent {
  constructor(private router: Router, private formBuilder: FormBuilder) { }

  dateOfBirthForm = this.formBuilder.group({
    date: ['', Validators.required],

  });

  isFieldInvalid(fieldName: string): boolean {
    const fieldControl = this.dateOfBirthForm.get(fieldName);
    if (fieldControl) {
      return (
        fieldControl.invalid && (fieldControl.dirty || fieldControl.touched)
      );
    }
    return false;
  }



  handleNextClick(): void {
    if (this.dateOfBirthForm.valid) {
      const emailsPassFromLocalStorage = JSON.parse(localStorage.getItem('user') as any)
      if (this.dateOfBirthForm.value.date) {
        emailsPassFromLocalStorage.dob = new Date(this.dateOfBirthForm.value.date)
        localStorage.setItem('user', JSON.stringify(emailsPassFromLocalStorage))
        this.router.navigate(['customer/tasty-tags']);
      }

    }
  }


  back() {
    this.router.navigate(['customer/register-password'])
  }
}
