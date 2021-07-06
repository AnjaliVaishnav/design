import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { SocialAuthService } from 'angularx-social-login';
import { SocialUser } from 'angularx-social-login';
import { GoogleLoginProvider,FacebookLoginProvider,AmazonLoginProvider,VKLoginProvider,MicrosoftLoginProvider} from 'angularx-social-login';

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
user!: SocialUser;
GoogleLoginProvider = GoogleLoginProvider;

  constructor (private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer, private fb : FormBuilder, private api: ApiService, private router: Router, private authService: SocialAuthService) {
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
    this.authService.authState.subscribe(user => {
      this.user = user;
    });
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
    Validators.pattern('^[1-9][0-9]*$'),
  ]);
  passwordFormControl = new FormControl('', [
    Validators.required,
    Validators.minLength(8),
  ]);
  showToasterSuccess(){
      this.api.showSuccess("Registration successfully !!", "Please Login! ")
  }
  
  showToasterError(){
      this.api.showError("Something is wrong", "Invalid Inputs")
  }

  showToasterWarning(){
      this.api.showWarning("Please try with other mobile number and name", "Aleady user")
  }
  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  submit(){
    var getData={
      "username": this.nameFormControl.value,
      "mobile": this.mobileFormControl.value,
      "password": this.passwordFormControl.value,
      "email": this.emailFormControl.value,
    }
    this.api.register(getData).subscribe((data:any=[])=>{
      console.log(data);
      this.tempuser = data[0].tempuser;
      console.log("tempuser",this.tempuser);
      if(data[0].status == false){
        this.showToasterWarning();
      }
      else{
        this.isShown = !this.isShown;
        this.show = !this.show;
      }
    })
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
        if(data[0].status == true){
          this.showToasterSuccess();
          this.router.navigate(['/login']);
        }
        else{
          this.showToasterError();
        }
    })
  }
  reset(){
    var getData={
      "tempuser":this.tempuser,
      "mobile": this.mobileFormControl.value,
    }
    this.api.resend(getData).subscribe(data=>
      console.log(data))
  }
}
