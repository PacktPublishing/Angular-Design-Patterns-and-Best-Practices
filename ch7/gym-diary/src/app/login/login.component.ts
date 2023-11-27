import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  private formBuilder = inject(NonNullableFormBuilder);
  private loginService = inject(AuthService);
  private router = inject(Router);

  public loginForm = this.formBuilder.group({
    username: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  login() {
    const loginValue = { ...this.loginForm.value };
    this.loginService.login(loginValue).subscribe({
      next: (_) => {
        this.router.navigate(['/home']);
      },
      error: (e) => alert('User not Found'),
    });
  }
}
