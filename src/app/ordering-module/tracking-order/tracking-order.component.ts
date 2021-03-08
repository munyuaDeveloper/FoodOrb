import {Component, OnInit} from '@angular/core';
import {FoodOrbService} from '../../services-module/food-orb.service';

@Component({
  selector: 'app-tracking-order',
  templateUrl: './tracking-order.component.html',
  styleUrls: ['./tracking-order.component.scss']
})
export class TrackingOrderComponent implements OnInit {

  orderStatus: any;

  constructor(private foodOrbService: FoodOrbService) {
  }

  ngOnInit(): void {
    this.getOrderStatus(1);
  }

  getOrderStatus(id): any {
    this.foodOrbService.getOrderStatus(id).subscribe(res => {
      this.orderStatus = res;
    });
  }

}
