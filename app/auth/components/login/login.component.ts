import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../authService/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  message : any
  signupForm: FormGroup;
  constructor(private formbuilder: FormBuilder,private authservice:AuthServiceService,private router: Router) {
    this.signupForm = formbuilder.group({
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }


  signinfun() {
    if (this.signupForm.valid) {
      this.authservice.logindatafun(this.signupForm.value).pipe(
        catchError(error => {
          this.message = error.error.message;
          return throwError(error);
        })
      ).subscribe(response => {
        console.log("backend response",response);
        if(response.message){
          alert(`${response.message}`);
        }else{        
        this.signupForm.reset();
        this.message = "login successfully";
        localStorage.setItem('token', response.token); // Store token in localStorage
        setTimeout(() => {
          this.router.navigate(['/website']);
        }, 1000);
      }
      })
    } 
}
}
