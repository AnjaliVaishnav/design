import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url ="http://143.110.244.110/khiladiworld/api/";

  constructor(private http: HttpClient,private toastr: ToastrService) {}
   
   addData(getData: any){
    return this.http.post(this.url + 'loginuser', getData);
  }

  register(getData: any){
    return this.http.post(this.url + 'tempregisteruser', getData);
  }
  verifyOtp(getData: any){
    return this.http.post(this.url + 'registerusers', getData)
  }
  resend(getData : any){
    return this.http.post(this.url + 'resendotp', getData)
  }

  // toaster
  showSuccess(message: string | undefined, title: string | undefined){
      this.toastr.success(message, title)
  }
  
  showError(message: string | undefined, title: string | undefined){
      this.toastr.error(message, title)
  }
  showWarning(message: string | undefined, title: string | undefined){
      this.toastr.warning(message, title)
  }
}
