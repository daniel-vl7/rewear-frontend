import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {

  baseUrl: string = 'https://my-json-server.typicode.com/daniel-vl7/rewearDB';
  resourceEndpoint: string = '/users';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(this.resourcePath(), this.httpOptions);
  }
  private resourcePath(): string {
    return `${this.baseUrl}${this.resourceEndpoint}`;
  }
}
