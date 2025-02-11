import { Component } from '@angular/core';
import { AuthService } from './core/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'agriculture-project';

  constructor(private auth: AuthService) { }

  isLoggedIn(): boolean {
    return this.auth.isAuthenticated();
  }
}
