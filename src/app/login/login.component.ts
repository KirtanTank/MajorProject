import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fac_email: string = '';
  fac_password : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  facultyLogin(){
    this.auth.facultyLogin(this.fac_email, this.fac_password);
    this.fac_email = '';
    this.fac_password = '';
  }

}
