import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/interfaces/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  userList: UserI[] = [];

  constructor(private userSvc: UserService) { }

  ngOnInit(): void {
    this.userSvc.getAll()
      .subscribe({
        next: userList => {
          this.userList = userList;
        },
        error: err => console.log({ err })
      })
  }

}
