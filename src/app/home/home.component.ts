import {Component, OnInit} from '@angular/core';
import {FoodOrbService} from '../services-module/food-orb.service';
import {DishDetails} from '../interfaces/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  Dishes: DishDetails[];

  constructor(private foodOrbService: FoodOrbService) {
  }

  ngOnInit(): void {
    this.getAllDishes();
  }

  getAllDishes(): any {
    this.foodOrbService.getDishes().subscribe(res => {
      this.Dishes = res;
    });
  }
}
