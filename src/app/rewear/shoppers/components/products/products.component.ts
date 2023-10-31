import {Component, OnInit} from '@angular/core';
import {Products} from "../../model/products";
import {ProductsService} from "../../services/products.service";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Products[] = [];
  constructor(private productsService: ProductsService) { }
  ngOnInit(): void {
    this.productsService.getAll().subscribe((response: any) => {
      console.log(response);
      this.products = response;
    });
  }

}
