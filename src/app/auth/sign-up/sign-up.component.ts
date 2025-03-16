import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  signupForm: FormGroup;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) {
    this.signupForm = this.formBuilder.group({
      nim: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      nomor_telepon: ['', Validators.required],
      nama: ['', Validators.required],
      jurusan: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }
  
  register(){
    
  }

}
