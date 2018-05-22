import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // reference for the password input element
  @ViewChild('passwordInput') passwordInput;
  // state of the password input value
  showPassword = false;
  // web form that holds username and password details
  signinForm: FormGroup;
  // user model
  user = {
    username: '',
    password: ''
  };
  // state of the sign in button
  isDisabled = true;
  // state of the error message
  showError = false;
  tryingToLogIn = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
  }

  onSubmit(email, password) {
    this.tryingToLogIn = true;
    this.authService.login(this.signinForm.value).subscribe(
      // Observable Success
      (result) => {
        console.log(result);
        if (result) {
          this.router.navigate(['account']);
        }
      },
      // Observable Error
      (error) => {
        console.log(error);
        this.showError = true;
        this.tryingToLogIn = false;
      },
      // Observable Done
      () => {
        // console.log('Logged In!');
        this.tryingToLogIn = false;
      });
  }

  onCloseError() {
    this.showError = false;
  }

  onPassRevealClick(event) {
    event.stopPropagation();
    if (this.showPassword) {
      this.passwordInput.nativeElement.type = 'password';
    } else {
      this.passwordInput.nativeElement.type = 'text';
    }
    this.showPassword = !this.showPassword;
  }

}
