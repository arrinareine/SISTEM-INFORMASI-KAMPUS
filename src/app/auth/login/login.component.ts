import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService
  ) {
    this.loginForm = this.formBuilder.group({
      authentication: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    if (this.loginForm.invalid) return;
  
    this.authenticationService.login(
      this.loginForm.value.authentication,
      this.loginForm.value.password
    ).subscribe({
      next: () => {
        const role = this.authenticationService.getUserRole();
        if (role) localStorage.setItem('enrollment_role', role);
  
        this.router.navigate(['/dashboard/home']);
      },
      error: (err) => {
        console.error('Login gagal:', err);
        this.errorMessage = err.error.message || 'Login gagal, coba lagi.';
      }
    });
  }

  setDefaultTheme(){
    if(localStorage.getItem('tablerTheme') === null){
      const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      localStorage.setItem('tablerTheme', deviceTheme);
      document.documentElement.setAttribute('data-bs-theme', deviceTheme);
    }
  }

  ngOnInit(): void {
    this.setDefaultTheme();
  }
}
