import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { AuthService } from '../../app/services/auth-service/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  fg: FormGroup;
  hidePassword = true;
  errorMsg!: string;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.clearError();
    sessionStorage.clear();
    this.fg = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  clearError() {
    this.errorMsg = '';
  }

  onSubmit() {
    if (this.fg.valid) {
      const values = this.fg.getRawValue();
      this.router.navigateByUrl('/dashboard');
    }
  }
}
