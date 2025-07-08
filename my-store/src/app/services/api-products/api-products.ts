import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiProducts {
  apiUrl: string = environment.apiUrl;

  constructor(

      private http: HttpClient

  ) { }
  getAllProducts(){
    return this.http.get(this.apiUrl);
  }
}
