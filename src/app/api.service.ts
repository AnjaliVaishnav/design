import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ApiService {
  url ="http://143.110.244.110/khiladiworld/api/";

  constructor(private http: HttpClient) {}
   
   addData(getData: any){
    return this.http.post(this.url + 'loginuser', getData);
  }
  
}
