import {Component, OnInit} from '@angular/core';
import {FoodOrbService} from '../services-module/food-orb.service';
import {DishDetails} from '../interfaces/interfaces';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Dishes: DishDetails[];

  constructor(private foodOrbService: FoodOrbService, private router: Router) {
  }

  ngOnInit(): void {
    this.getAllDishes();
  }

  getAllDishes(): any {
    this.foodOrbService.getDishes().subscribe(res => {
      this.Dishes = res;
    });
  }

  addToCart(order): any {
    const body = {
      listing_id: order['id'],
      amount: order['cost'],
      quantity: '1'
    };
    this.foodOrbService.addToCart(body).subscribe(res => {
      this.router.navigate(['/orders']);
    });
  }
}
