import { Component, OnInit } from '@angular/core';
import { TypeMockService } from '../../services/type-mock.service';
import { User } from '../../shared/models/user';


@Component({
  selector: 'app-user-typehead',
  templateUrl: './user-typehead.component.html',
  styleUrls: ['./user-typehead.component.css']
})
export class UserTypeheadComponent implements OnInit {
  user: string[];
  selectedUser: string;
  selectedUserValue: string;
  userApiUrl = "users?q=";

  constructor(private service: TypeMockService) { }

  ngOnInit() {
  }
  /**Detecting the typehead value */
  public changeUserValue(selectedUser: string): void {

    this.selectedUserValue = selectedUser;
    this.getUserRepoData();
  }
  /**Subscribing the user data from github API */
  private getUserRepoData(): void {
    this.user = [];
    this.service.getUserApidata(this.userApiUrl, this.selectedUserValue).subscribe(data => {
      data.items.map((result: User) => {
        this.user.push(result.login);
      })
    })
  }
}
