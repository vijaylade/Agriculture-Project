import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  constructor(private auth:AuthService) {}

  isCollapsed = false; // Initially, the drawer is expanded.

  toggle() {
    this.isCollapsed = !this.isCollapsed; // Toggle the collapsed state.
  }

  logout() {
    console.log('logout btn is clicked');
    this.auth.logoutUser();
    console.log('user is logged out');
  }

}
