import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.minLength(8), Validators.required]],
    });
  }

  login(): void {
    
    if (this.loginForm.valid) {
      console.log("__nvigate__to__dashs");
      const { email, password } = this.loginForm.value;

      this.userService.getAllUsers().subscribe((users) => {
        const foundUser = users.find(
          (user) => user.email === email && user.password === password
        );
        if(email==="admin@gmail.com" && password === "adminadmin"){
          // this.router.navigate(['http://localhost:4200/content']);
          window.location.href = 'http://localhost:4200/dashboard';
          console.log("__nvigate__to__dashs");
         }
        else if (foundUser) {
          this.router.navigate(['/list-activities']);
        }
        else {
          console.log('Adresse email ou mot de passe incorrects');
          alert("Adresse email ou mot de passe incorrects");
        }
      });
    }
  }
}

