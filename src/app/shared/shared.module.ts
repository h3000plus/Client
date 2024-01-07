import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeScreenComponent } from './components/welcome-screen/welcome-screen/welcome-screen.component';
import { RouterModule } from '@angular/router';
import { BottomMenuComponent } from './components/bottom-menu/bottom-menu.component';



@NgModule({
  declarations: [
    WelcomeScreenComponent,
    BottomMenuComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    WelcomeScreenComponent,
    BottomMenuComponent
  ]
})
export class SharedModule { }
