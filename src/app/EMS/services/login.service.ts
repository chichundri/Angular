import { Injectable } from '@angular/core';
import { Http,Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
// import 'rxjs/add/operator/map';

import { Employee } from '../model/employee';

@Injectable()
export class LoginService {
  URL : string = "http://localhost:8089/EMS/ems/";
  constructor(private http: Http) { }

  login(userId: string, password: string): Observable<any> {
    let cpHeaders = new Headers({ 'Content-Type': 'application/json' });
    let cpParams = new URLSearchParams();
    cpParams.set('userId', userId);
    cpParams.set('password', password);
    let options = new RequestOptions({ headers: cpHeaders, params: cpParams });
    return this.http.get(this.URL+"login", options)
      .map((res : any) => {
       return JSON.parse(res._body);
      })
      .catch(this.handleError);
  }




  extractData(res: Response){
    let body = res.json();
    alert(body);
    return body;
  }

  handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }
}
