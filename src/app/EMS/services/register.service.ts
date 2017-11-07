import { Injectable } from '@angular/core';
import { Http,Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';

@Injectable()
export class RegisterService {
  URL : string = "http://localhost:8089/EMS/ems/";
  cpHeaders = new Headers({ 
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin' :  'http://localhost:4200',
    'Access-Control-Allow-Methods': 'POST,GET,PUT,DELETE',
    'Access-Control-Allow-Headers': 'Content-Type, Access-Control-Allow-Origin, Access-Control-Allow-Methods',
    // 'Access-Control-Allow-Credentials': 'true'
  });
  constructor(private http: Http) { }

  getDepartments(): Observable<any> {
    return Observable.fromPromise(this.http.get(this.URL + "departments")
    .map((res : any) => {
      // console.log(res.json());
      // let jsonData = JSON.parse(res._body);
      // let jsonResponse = res.json();

      return res.json();
     })
     .toPromise()
     .catch(this.handleError));
  }

  register(form: string) {
    console.log(JSON.stringify(form));
    
    // let cpParams = new URLSearchParams();
    // cpParams.set('userId', userId);
    // cpParams.set('password', password);
    // cpParams.set('form',form);
    // let options = new RequestOptions({ headers: this.cpHeaders });
    return Observable.fromPromise(this.http.post(this.URL + "register", JSON.stringify(form), { headers: this.cpHeaders })
    .map((res : any) => {
      return res.json();
     })
     .toPromise()
     .catch(this.handleError));
  }

  handleError(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.status);
  }

}
