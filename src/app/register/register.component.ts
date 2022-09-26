import { Component, OnInit } from '@angular/core';

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
  constructor() { }

  ngOnInit(): void {
  }

}
