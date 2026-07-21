import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { url } from '../interface/api_config';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {
  
  private baseUrl = new url().value;
  Url = this.baseUrl;


  constructor(private http: HttpClient) { }
  signup(model:any):Observable<any> {
    let url = this.Url+"signup";
    return  this.http.post(url, model)
  }
  
  varify(model:any):Observable<any>{
    let url = this.Url+"VerifyOTP";
    return this.http.post(url, model)
  }

  signIn(model:any):Observable<any>{
    let url = this.Url+"LoginOTP";
    return this.http.post(url, model);
  }

  forget(model:any):Observable<any>{
    let url = this.Url+"ForgetReq";
    return this.http.post(url, model);
  }

}

