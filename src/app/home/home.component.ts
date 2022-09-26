import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  name:string = '';
  email : string = '';
  message : string = '';

  toHome(){
    document.getElementById("home")?.scrollIntoView({behavior: 'smooth'});
  }

  toAbout(){
    document.getElementById("aboutus")?.scrollIntoView({behavior: 'smooth'});

  }

  toContact(){
    document.getElementById("contact")?.scrollIntoView({behavior: 'smooth'});

  }
  constructor() { }

  ngOnInit(): void {
    AOS.init();
  }
}
