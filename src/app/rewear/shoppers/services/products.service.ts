import {Injectable} from '@angular/core';
import {BaseService} from "../../../shared/services/base.service";
import {Products} from "../model/products";
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ProductsService extends BaseService<Products> {

  constructor(http: HttpClient, private router: Router) {
    super(http);
    this.resourceEndpoint = '/clothes';
  }
}
