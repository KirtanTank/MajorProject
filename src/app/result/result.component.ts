import { Component, OnInit } from '@angular/core';
import { AuthService } from '../authService/auth.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  constructor(private auth : AuthService) { }

  ngOnInit(): void {
  }

  logout(){
    this.auth.logout()
  }

  toProfile(){

  }

}
