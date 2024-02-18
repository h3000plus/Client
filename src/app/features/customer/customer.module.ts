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
import { RegisterPasswordComponent } from './components/register-password/register-password.component';
import { SearchAddressComponent } from './components/search-address/search-address.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { LoyaltyComponent } from './components/loyalty/loyalty.component';
import { AccountComponent } from './components/account/account.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { SharedModule } from '../../shared/shared.module';
import { AddressTimeComponent } from './components/address-time/address-time.component';
import { DateOfBirthComponent } from './components/date-of-birth/date-of-birth.component';
import { TastyTagsComponent } from './components/tasty-tags/tasty-tags.component';

@NgModule({
  declarations: [
    SelectionScreenComponent,
    LoginComponent,
    ProfileComponent,
    RegisterComponent,
    EnterPasswordComponent,
    AddressComponent,
    RegisterPasswordComponent,
    SearchAddressComponent,
    AccountComponent,
    WalletComponent,
    LoyaltyComponent,
    FavoriteComponent,
    AddressTimeComponent,
    DateOfBirthComponent,
    TastyTagsComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule
  ],
  exports: [ LoginComponent, RegisterComponent, SelectionScreenComponent ]
})
export class CustomerModule { }
