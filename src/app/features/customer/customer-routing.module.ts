import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionScreenComponent } from './components/selection-screen/selection-screen.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { EnterPasswordComponent } from './components/enter-password/enter-password.component';
import { AddressComponent } from './components/address/address.component';
import { RegisterPasswordComponent } from './components/register-password/register-password.component';
import { SearchAddressComponent } from './components/search-address/search-address.component';
import { ProfileComponent } from './components/profile/profile.component';
import { AccountComponent } from './components/account/account.component';
import { WalletComponent } from './components/wallet/wallet.component';
import { LoyaltyComponent } from './components/loyalty/loyalty.component';
import { FavoriteComponent } from './components/favorite/favorite.component';

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

  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'wallet',
    component: WalletComponent
  },
  {
    path: 'loyalty-program',
    component: LoyaltyComponent
  },
  {
    path: 'favorite',
    component: FavoriteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
