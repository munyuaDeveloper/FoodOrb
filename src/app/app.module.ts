import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {RegistrationComponent} from './registration-module/registration/registration.component';
import {LoginComponent} from './registration-module/login/login.component';
import {ForgotPasswordComponent} from './registration-module/forgot-password/forgot-password.component';
import {UserProfileComponent} from './registration-module/user-profile/user-profile.component';
import {SettingComponent} from './registration-module/setting/setting.component';
import {FoodListingsComponent} from './listing-module/food-listings/food-listings.component';
import {FeedsComponent} from './listing-module/feeds/feeds.component';
import {OrderingsComponent} from './ordering-module/orderings/orderings.component';
import {TrackingOrderComponent} from './ordering-module/tracking-order/tracking-order.component';
import {FriendsListComponent} from './friends-module/friends-list/friends-list.component';
import {HomeComponent} from './home/home.component';
import {ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgotPasswordComponent,
    UserProfileComponent,
    SettingComponent,
    FoodListingsComponent,
    FeedsComponent,
    OrderingsComponent,
    TrackingOrderComponent,
    FriendsListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
