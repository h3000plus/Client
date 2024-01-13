import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionScreenComponent } from './components/selection-screen/selection-screen.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EnterPasswordComponent } from './components/enter-password/enter-password.component';
import { AddressComponent } from './components/address/address.component';
import { RegisterPasswordComponent } from './components/register-password/register-password.component';
import { SearchAddressComponent } from './components/search-address/search-address.component';

const routes: Routes = [
  {
    path: 'customer',
    children: [
  //     {
  //       path: '',
  //       component: HomeComponent,
  //     },

      // {
      //   path: 'select',
      //   component: SelectionScreenComponent,
      // },
      {
        path: 'register',
        component: RegisterComponent,
      },
      {
        path: 'enter-email',
        component: LoginComponent,
      },
      {
        path: 'login-password',
        component: EnterPasswordComponent,
      },
      {
        path: 'register-password',
        component: RegisterPasswordComponent,
      },
      {
        path: 'address',
        component: AddressComponent
      },
      {
        path: 'search-address',
        component: SearchAddressComponent
      }
    ],
  // },
  // {
  //   path: 'profile',
  //   component: ProfileComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
