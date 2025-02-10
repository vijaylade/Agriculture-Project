import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  constructor(private authdata:AuthService) {}

  name: string = '';
  email: string = '';
  password: string = '';

  registerUser(data: any) {
    console.log('Register btn clicked');
    console.log(data);
    this.authdata.register(data).subscribe((response) => {
      console.log('response :', response);
    })
  }

}
