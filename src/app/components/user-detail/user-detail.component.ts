import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';
import { UserI } from 'src/app/interfaces/user.interface';
// import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user$!: Observable<UserI>;

  constructor(
    private activatedRoute: ActivatedRoute,
    // private userSvc: UserService
  ) {}

  ngOnInit(): void {
    // const userId = this.activatedRoute.snapshot.paramMap.get('id');
    // userId && this.getUserById(userId);
    this.user$ = this.activatedRoute.data.pipe(map((data) => data['user']));
  }

  // getUserById(userId: string) {
  //   this.userSvc.getById(userId)
  //     .subscribe({
  //       next: user => {
  //         this.user = user;
  //       },
  //       error: err => console.log({ err })
  //     })
  // }
}
