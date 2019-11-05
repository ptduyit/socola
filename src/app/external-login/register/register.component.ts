import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm: FormGroup;
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  submit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }
    this.authService
      .register(
        this.registerForm.controls['email'].value,
        this.registerForm.value.password
      )
      .subscribe(
        (data: any) => {
          this.authService.isLogin = true;
          localStorage.setItem('token', data.token);
          localStorage.setItem('refreshToken', data.refreshToken);
          this.router.navigateByUrl('/post');
        },
        err => {
          console.log(err);
        }
      );
  }
}
