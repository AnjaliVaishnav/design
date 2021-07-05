import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ApiService } from '../api.service';

const googleLogoURL = 
"https://raw.githubusercontent.com/fireflysemantics/logo/master/Google.svg";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
show: boolean = false;
isShown: boolean = true;
resend: boolean = false;
otp: any;
  tempuser: any;

  constructor (
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer, private fb : FormBuilder, private api: ApiService) {
      this.matIconRegistry.addSvgIcon(
      "logo",
      this.domSanitizer.bypassSecurityTrustResourceUrl(googleLogoURL));
    }
    config = {
      allowNumbersOnly: false,
      length: 4,
      isPasswordInput: false,
      disableAutoFocus: false,
      placeholder: '',
      inputStyles: {
        'width': '40px',
        'height': '40px'
      }
    };

  ngOnInit(): void {
  }
  nameFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(3),
  ]);
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  mobileFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(10),
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  submit(){
    var getData={
      username: this.nameFormControl.value,
      mobile: this.mobileFormControl.value,
      password: this.passwordFormControl.value,
      email: this.emailFormControl.value,
    }
    this.api.register(getData).subscribe((data:any=[])=>{
      console.log(data);
      this.tempuser = data[0].tempuser;
      console.log("tempuser",this.tempuser);
    })
    this.isShown = !this.isShown;
    this.show = !this.show;
  }
  onFinish(){
    this.resend = !this.resend;
  }
  onOtpChange(otp: any) {
    this.otp = otp;
  }
  verifyOtp(){
    var otp = this.otp;
      var getData = {
        "tempuser":this.tempuser,
        "otp":otp,
        "refercode":""
      }
      this.api.verifyOtp(getData).subscribe((data: any= []) => { 
        console.log("data",data[0]);
        var token = data[0].auth_key;
    })
  }
  reset(){}
}
