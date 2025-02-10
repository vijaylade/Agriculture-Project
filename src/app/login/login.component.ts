import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData = { email: '', password: '' };

  constructor(private auth: AuthService, private router: Router) { }

  login() {
    const { email, password } = this.loginData;
    console.log(email, password);
    this.auth.loginUser(email, password).subscribe((response) => {
      console.log('Login successful', response);
      alert('login successfully');
      this.router.navigate(['/dashboard']);
    },
      (error) => {
        console.error('Login failed', error);
        alert('Invalid credentials, please try again.');
        this.loginData.email = '',
          this.loginData.password = ''
      });
  }

}
