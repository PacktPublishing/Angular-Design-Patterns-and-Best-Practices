import { Component, OnInit, computed, inject, signal } from '@angular/core';
import { NonNullableFormBuilder, Validators } from '@angular/forms';

import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
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

  ngOnInit(): void {
    let a = signal<number>(2);
    let b = signal<number>(3);
    let sum = computed(() => a() + b());
    console.log(sum());

    a.set(9);
    console.log(sum());

    b.update((oldValue) => oldValue * 2);
    
    console.log(sum());
  }
}
