import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../api.service';

const googleLogoURL = 
"https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
loginForm:FormGroup;
  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer, private fb : FormBuilder, private api: ApiService) {
      this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
      this.loginForm = this.fb.group({
        emailFormControl: ['',[Validators.required, Validators.pattern('')]],
        passwordFormControl: ['', [Validators.required, Validators.minLength(8)]]
      })
    }
  ngOnInit(): void {
  }
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  submit(){
    var getData={
      username: this.emailFormControl.value,
      password: this.passwordFormControl.value
    }
    alert( this.emailFormControl.value);
    this.api.addData(getData).subscribe(data=>{
      console.log(data);
    })
  }
}
