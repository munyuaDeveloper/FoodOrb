import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {RegistrationComponent} from './registration-module/registration/registration.component';
import {LoginComponent} from './registration-module/login/login.component';
import {ForgotPasswordComponent} from './registration-module/forgot-password/forgot-password.component';
import {UserProfileComponent} from './registration-module/user-profile/user-profile.component';
import {SettingComponent} from './registration-module/setting/setting.component';
import {OrderingsComponent} from './ordering-module/orderings/orderings.component';
import {TrackingOrderComponent} from './ordering-module/tracking-order/tracking-order.component';
import {FriendsListComponent} from './friends-module/friends-list/friends-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'

  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path: 'profile',
    component: UserProfileComponent
  },
  {
    path: 'setting',
    component: SettingComponent
  },
  {
    path: 'orders',
    component: OrderingsComponent
  },
  {
    path: 'order-tracking',
    component: TrackingOrderComponent
  },
  {
    path: 'friends',
    component: FriendsListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
