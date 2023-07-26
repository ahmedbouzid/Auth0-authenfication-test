import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'test-login-with-Auth0';
  isAuthenticated!: boolean;

  constructor(@Inject(DOCUMENT) private document: Document, private auth0: AuthService) {
    this.isAuthenticated = false;
  }

  ngOnInit(): void {
    this.auth0.isAuthenticated$.subscribe((success: boolean) => {
      this.isAuthenticated = success;
    });
  }

  signOut() {
    this.auth0.logout();
  }
}
