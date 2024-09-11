import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  template: `
    <h1>Sign In</h1>
    <div class="signin-form-container">
      <form [formGroup]="signinForm" (ngSubmit)="signin()" class="signin-form">
        <fieldset>
          <legend>Sign In</legend>

          <label for="email">Email</label>
          <input formControlName="email" type="email" id="email" name="email" />
          @if (signinForm.controls['email'].touched &&
          signinForm.controls['email'].hasError('required')) {
          <small class="error">Email is required.</small>
          } @if (signinForm.controls['email'].touched &&
          signinForm.controls['email'].hasError('email')) {
          <small class="error">Invalid Email Address.</small>
          }

          <label for="password">Password</label>
          <input
            formControlName="password"
            type="password"
            name="password"
            id="password"
          />
          @if (signinForm.controls['password'].touched &&
          signinForm.controls['password'].hasError('required')) {
          <small class="error">Password is required.</small>
          } @if (signinForm.controls['password'].touched &&
          signinForm.controls['password'].hasError('pattern')) {
          <small class="error"
            >Password must be at least 8 characters long and contain at least
            one uppercase letter and one number.</small
          >
          }

          <input type="submit" [disabled]="!signinForm.valid" value="Sign In" />
        </fieldset>
      </form>
    </div>
  `,
  styles: `
  .signin-form-container {
  display: flex;
  justify-content: space-between;
  width: 50%;
  }

  .signin-form {
    flex: 1;
    margin-right: 20px;
  }

  fieldset {
    border-color: #bb6528;
    background-color: #ffebcd;
  }

  legend {
    background-color: #bb6528;
    padding: 5px;
  }

  label,
  input {
    display: block;
    margin-bottom: 5px;
  }

  input,
  input[type="submit"] {
    padding: 8px;
    box-sizing: border-box;
  }

  input[type="email"],
  input[type="password"] {
    width: 100%;
  }

  input[type="submit"] {
    margin: 0 auto;
  }

  .error {
    color: red;
    padding: 5px;
  }`,
})
export class SigninComponent {
  signinForm: FormGroup = this.fb.group({
    email: [null, Validators.compose([Validators.required, Validators.email])],
    password: [
      null,
      Validators.compose([
        Validators.required,
        Validators.pattern(/^(?=.*[A-Z])(?=.*[0-9]).{8,}$/),
      ]),
    ],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  signin() {
    const email = this.signinForm.controls['email'].value;
    const password = this.signinForm.controls['password'].value;

    if (this.authService.signin(email, password)) {
      const returnUrl =
        this.route.snapshot.queryParamMap.get('returnUrl') || '/';
      this.router.navigate([returnUrl]);
    } else {
      alert('Invalid email or password. Please try again.');
    }
  }
}
