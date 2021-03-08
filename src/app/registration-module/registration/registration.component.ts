import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FoodOrbService} from '../../services-module/food-orb.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private foodOrbService: FoodOrbService,
              private formBuilder: FormBuilder,
              private router: Router) {
  }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      phone: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      password_confirmation: ['', Validators.required],
    });
  }

  registerUser(): any {
    this.foodOrbService.registerUser(this.registerForm.value).subscribe(res => {
      this.router.navigate(['/']);
      localStorage.setItem('api_token', res['data']['api_token']);
    }, err => {
      alert('Invalid details!');
    });
  }
}
