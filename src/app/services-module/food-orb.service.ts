import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DishDetails, FriendDetails, OrderDetail} from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class FoodOrbService {
  baseUrl = 'http://127.0.0.1:8000/api/';

  register = this.baseUrl + 'register/';
  login = this.baseUrl + 'login/';
  forgotPassword = this.baseUrl + 'forgotpassword';
  users = this.baseUrl + 'users';
  userDetails = this.baseUrl + 'users/{order_id}';
  setting = this.baseUrl + 'setting';
  feeds = this.baseUrl + 'feed';
  orders = this.baseUrl + 'orders';
  orderDetails = this.baseUrl + 'orders/{order_id}';
  orderStatus = this.baseUrl + 'orders/';
  friends = this.baseUrl + 'friends';
  listings = this.baseUrl + 'listings';

  constructor(private http: HttpClient) {
  }

  registerUser(userDetails): any {
    return this.http.post(this.register, userDetails);
  }

  loginUser(userDetails): any {
    return this.http.post(this.login, userDetails);
  }

  resetPassword(userDetails): any {
    return this.http.post(this.forgotPassword, userDetails);
  }

  listUsers(): any {
    return this.http.get(this.users);
  }

  getUserDetails(id): any {
    return this.http.get(this.userDetails + id);
  }

  updateUserProfile(userDetails): any {
    return this.http.post(this.users, userDetails);
  }

  getDishes(): Observable<DishDetails[]> {
    return this.http.get<DishDetails[]>(this.listings);
  }

  getFeeds(): any {
    return this.http.get(this.feeds);
  }
  getOrders(): Observable<OrderDetail[]> {
    return this.http.get<OrderDetail[]>(this.orders);
  }

  getOrderDetails(id): any {
    return this.http.get(this.orderDetails + id);
  }

  getOrderStatus(id): any {
    return this.http.get(this.orderStatus + id + '/status');
  }

  getFriends(): Observable<FriendDetails[]> {
    return this.http.get<FriendDetails[]>(this.friends);
  }
}
