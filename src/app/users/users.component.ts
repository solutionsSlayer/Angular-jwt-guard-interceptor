import { Component, OnInit } from '@angular/core';
import { User } from '../shared/model/user';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers()
    .subscribe(data => {
      this.users = data;
      console.log(data)
    })
  }

}
