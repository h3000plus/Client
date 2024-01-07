import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionScreenComponent } from './components/selection-screen/selection-screen.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EnterPasswordComponent } from './components/enter-password/enter-password.component';
import { AddressComponent } from './components/address/address.component';

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
        path: 'enter-password',
        component: EnterPasswordComponent,
      },
      {
        path: 'address',
        component: AddressComponent
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
