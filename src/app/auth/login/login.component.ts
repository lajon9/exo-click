import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  signinForm: FormGroup; 
  user = {
    username: '',
    password: ''
  };
  isDisabled: boolean = true;
  showError: boolean = false;

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
    this.signinForm = new FormGroup({
      'username': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required])
    });
    console.log(this.signinForm)
  }

  onSubmit(email, password) {
    this.authService.login(this.signinForm.value).subscribe(
      (result) => {
        console.log(result)
        if (result) {
          this.router.navigate(['account']);
        }
      },
      (error) => {
        console.log(error)
        this.showError = true;
      });
  }

  onCloseError() {
    this.showError = false;
  }

}
