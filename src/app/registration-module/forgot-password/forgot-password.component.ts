import {Component, OnInit} from '@angular/core';
import {FoodOrbService} from '../../services-module/food-orb.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
  resetForm: FormGroup;

  constructor(private foodOrbService: FoodOrbService,
              private router: Router,
              private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.resetForm = this.formBuilder.group({
      email: ['']
    });
  }

  resetPassword(): any {
    this.router.navigate(['/login']);
    // this.foodOrbService.resetPassword(this.resetForm.value.email).subscribe(res => {
    //   this.router.navigate(['/login']);
    //   localStorage.setItem('api_token', res['data']['api_token']);
    // }, err => {
    //   alert('Invalid details!');
    // });
  }
}
