import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome-screen',
  templateUrl: './welcome-screen.component.html',
  styleUrl: './welcome-screen.component.scss'
})
export class WelcomeScreenComponent {
  constructor(private ngZone: NgZone, private router: Router) {}

  /**
   * Lifecycle hook that is called after Angular has initialized all data-bound properties of a directive.
   */
  ngOnInit() {
    // if (window.innerWidth >= 768) {
    //   setTimeout(() => {
    //     this.ngZone.run(() => {
    //       this.router.navigate(['/shop/select']);
    //     });
    //   }, 4000);
    // } else {
      setTimeout(() => {
        this.ngZone.run(() => {
          this.router.navigate(['customer/enter-email']);
        });
      }, 5000);
  //   }
  }
}
