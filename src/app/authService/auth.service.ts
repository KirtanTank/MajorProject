import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth, private router: Router) { }
    
    // login auth
    facultyLogin(email: string, password: string){
      this.fireauth.signInWithEmailAndPassword(email, password).then(() => {
        localStorage.setItem('token', 'true');
        this.router.navigate(['/Result']);
      }, err => {
        alert(err);
        this.router.navigate(['/Login']);
      })
    }

    // Register
    facultyRegister(email: string, password: string){
      this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
        alert('Registration Successful!');
        this.router.navigate(['/Login']);
      }, err => {
        alert(err);
        this.router.navigate(['/Register']);
      })
    }

    studentRegister(email: string, password: string){
      this.fireauth.createUserWithEmailAndPassword(email, password).then(() => {
        alert('Registration Successful!');
      }, err => {
        alert(err);
        this.router.navigate(['/Register']);
      })
    }

    // Logout
    logout(){
      this.fireauth.signOut().then(() => {
        localStorage.removeItem('token');
        alert('Logged Out');
        this.router.navigate(['/Login']);
      }, err => {
        alert(err);
      })
    }
}
