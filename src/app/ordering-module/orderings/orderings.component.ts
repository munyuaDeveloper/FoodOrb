import { Component, OnInit } from '@angular/core';
import {FoodOrbService} from '../../services-module/food-orb.service';
import {OrderDetail} from '../../interfaces/interfaces';

@Component({
  selector: 'app-orderings',
  templateUrl: './orderings.component.html',
  styleUrls: ['./orderings.component.scss']
})
export class OrderingsComponent implements OnInit {

  Orders: OrderDetail[];

  constructor(private foodOrbService: FoodOrbService) {
  }

  ngOnInit(): void {
    this.getAllOrders();
  }

  getAllOrders(): any {
    this.foodOrbService.getOrders().subscribe(res => {
      this.Orders = res;
    });
  }
}
