import {Component, OnInit} from '@angular/core';
import {FriendDetails} from '../../interfaces/interfaces';
import {FoodOrbService} from '../../services-module/food-orb.service';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.scss']
})
export class FriendsListComponent implements OnInit {
  friendsList: FriendDetails[];

  constructor(private foodOrbService: FoodOrbService) {
  }

  ngOnInit(): void {
    this.getAllFriends();
  }

  getAllFriends(): any {
    this.foodOrbService.getFriends().subscribe(res => {
      this.friendsList = res;
    });
  }
}
