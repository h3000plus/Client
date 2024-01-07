import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { SelectionScreenComponent } from './components/selection-screen/selection-screen.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EnterPasswordComponent } from './components/enter-password/enter-password.component';
import { AddressComponent } from './components/address/address.component';

@NgModule({
  declarations: [
    SelectionScreenComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    EnterPasswordComponent,
    AddressComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [ LoginComponent, RegisterComponent, SelectionScreenComponent ]
})
export class CustomerModule { }
