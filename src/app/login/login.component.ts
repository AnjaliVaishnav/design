import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
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
    private domSanitizer: DomSanitizer, private fb : FormBuilder, private api: ApiService, private router: Router) {
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
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  showToasterSuccess(){
    this.api.showSuccess("Login successfully !!", "Hurray! ")
  }
  showToasterError(){
    this.api.showError("Something is wrong", "Invalid Inputs")
  }
  submit(){
    var getData={
      username: this.nameFormControl.value,
      password: this.passwordFormControl.value
    }
    this.api.addData(getData).subscribe((data:any=[])=>{
      console.log(data);
      if(data[0].status == true){
        this.showToasterSuccess();
        this.router.navigate(['/home']);
      }else{
        this.showToasterError();
      }
    })
  }
}
