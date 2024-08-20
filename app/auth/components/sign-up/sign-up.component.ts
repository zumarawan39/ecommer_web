import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Router } from '@angular/router';
import { AuthServiceService } from '../../authService/auth-service.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  message: any;
  confirmPasswordFocused = false;
  signupForm: FormGroup;
  constructor(private fb: FormBuilder , private authservice: AuthServiceService,private router: Router) {
    this.signupForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/)]],
      phonenumber: ['', [Validators.required, Validators.pattern(/^\+?\d{13}$/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/)]],
      confirmpassword: ['', Validators.required]
    });
  }

  signup() {
    if (this.signupForm.valid) {
      this.authservice.signup_fundata(this.signupForm.value).pipe(
        catchError(error => {
          this.message = error.error.message; // Update the message with error response
          return throwError(error); // Return the error
        })
      ).subscribe(response => {
        this.signupForm.reset();
        this.message = "registered successfully";
        console.log(response);
        this.router.navigate(['/login'])
      });
    }
}

}
