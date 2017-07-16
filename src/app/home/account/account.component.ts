import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  // value of the logged in username
  username: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.username = this.authService.username;
  }

}
