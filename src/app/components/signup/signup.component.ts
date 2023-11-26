import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router,
    private userService : UserService
  ) {}

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      firstName: ['', [Validators.minLength(3), Validators.required]],
      lastName: ['', [Validators.maxLength(5), Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  signup(): void {
    if (this.signupForm.valid) {
      const nvUser: User = this.signupForm.value; 
      nvUser.role=false;
      this.authService.signup(nvUser).subscribe(
        data => console.log(data) );
        this.userService.addUser(nvUser).subscribe(data => console.log(data));
    } 
    this.router.navigate(['/list-activities']);  
  }
}


