import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  baseUrl: string = 'https://my-json-server.typicode.com/daniel-vl7/rewearDB';
  resourceEndpoint: string = '/products';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json',
    })
  }
  constructor(private http: HttpClient) { }

  createProduct(productData: any){
    const url = `${this.baseUrl}${this.resourceEndpoint}`
    return this.http.post(url, productData, this.httpOptions)
  }
}
