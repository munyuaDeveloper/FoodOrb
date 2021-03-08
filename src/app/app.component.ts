import {Component, OnInit} from '@angular/core';
import {OrderDetail} from './interfaces/interfaces';
import {FoodOrbService} from './services-module/food-orb.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  loggedIn = false;

  constructor(private router: Router) {
    setInterval(time => {
      if (localStorage.getItem('api_token')) {
        this.loggedIn = true;
      }
    }, 2000);
  }

  logoutUser(): void {
    localStorage.clear();
    this.router.navigate(['/login']);
    this.loggedIn = false;
  }
}
