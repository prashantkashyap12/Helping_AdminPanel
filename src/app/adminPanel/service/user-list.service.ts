import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { url } from '../../interface/api_config';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserListService {

  private baseUrl = new url().value;

  constructor(private _http:HttpClient) {  }

  
  userGetLs(type?: any): Observable<any> {
  console.log("Type:", type);

  const url = type ? `${this.baseUrl}GetList?type=${type}` : `${this.baseUrl}GetList`;

  console.log("URL:", url);

  return this._http.get(url);
}
  async userDelLs(emails:any):Promise<any>{
    let url = this.baseUrl+`Delete?email=${emails}`
    let res = this._http.delete(url).toPromise();
    return res
  }


}
