import { Component , Inject , Input, OnInit  } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any;
  showUserInfoFlag: boolean;
  constructor(@Inject(DOCUMENT) public document: Document, public auth: AuthService) {
    this.user = {};
    this.showUserInfoFlag = false;
  }

  ngOnInit(): void {
    this.auth.user$.subscribe((success: any) => {
      this.user = success;
    });
  }

  toggleUserInfo() {
    this.showUserInfoFlag = !this.showUserInfoFlag;
  }
}
