import {Component, OnInit} from '@angular/core';
import {FoodOrbService} from '../../services-module/food-orb.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private foodOrbService: FoodOrbService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  loginUser(): any {
    this.foodOrbService.loginUser(this.loginForm.value).subscribe(res => {
      this.router.navigate(['/']);
      localStorage.setItem('api_token', res['data']['api_token']);
    }, err => {
      alert('Invalid email or password!');
    });
  }
}
