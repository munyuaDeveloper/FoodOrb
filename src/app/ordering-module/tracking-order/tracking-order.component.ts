import {Component, OnInit} from '@angular/core';
import {FoodOrbService} from '../../services-module/food-orb.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-tracking-order',
  templateUrl: './tracking-order.component.html',
  styleUrls: ['./tracking-order.component.scss']
})
export class TrackingOrderComponent implements OnInit {

  orderStatus: any;
  orderID = '';

  constructor(private foodOrbService: FoodOrbService,
              private router: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      this.orderID = params['id'];
    });
    this.getOrderStatus(this.orderID);
  }

  getOrderStatus(id): any {
    this.foodOrbService.getOrderStatus(id).subscribe(res => {
      this.orderStatus = res;
    });
  }

}
