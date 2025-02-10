import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient, private router:Router) { }

  private apiUrl = environment.apiUrl;

  register(data: any) {
    return this.http.post(`${this.apiUrl}/register`, data);
  }

  loginUser(email: string, password: string) {
    const logindata = { email, password }
    return this.http.post(`${this.apiUrl}/login`, logindata).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('authToken', response.token);
        }
      })
    );
  }

  // Check if the user is authenticated
  isAuthenticated(): boolean {
    return !!localStorage.getItem('authToken'); //!! convert the value in boolean
  }

  logoutUser() {
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
  }
}
