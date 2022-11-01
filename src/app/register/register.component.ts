import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  student(){
    const x = document.getElementById('student') as HTMLDivElement;
    const y = document.getElementById('faculty') as HTMLDivElement;
    const z = document.getElementById('btn') as HTMLDivElement;
    x.style.left = '50px'; 
    y.style.left = '450px';
    z.style.left = '0px';
  }

  faculty(){
    const x = document.getElementById('student') as HTMLDivElement;
    const y = document.getElementById('faculty') as HTMLDivElement;
    const z = document.getElementById('btn') as HTMLDivElement;
    x.style.left = '-400px'; 
    y.style.left = '50px';
    z.style.left = '100px';
  }

  email : string = '';
  password : string = '';
  name : string = '';
  mobile : string = '';

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }
  studentRegister(){
    if(this.email == '' || this.name == '' || this.password == '' || this.mobile == ''){
      alert('Please fill up all the information!');
      return;
    }
    this.auth.studentRegister(this.email, this.password);
    this.email = '';
    this.password = '';
    this.name = '';
    this.mobile = '';
  }

  facultyRegister(){
    if(this.email == '' || this.name == '' || this.password == '' || this.mobile == ''){
      alert('Please fill up all the information!');
      return;
    }
    this.auth.facultyRegister(this.email, this.password);
    this.email = '';
    this.password = '';
    this.name = '';
    this.mobile = '';
  }
}
