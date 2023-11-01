import { Component } from '@angular/core';
import {ProductsService} from "../../services/products.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  productForm: FormGroup;
  constructor(private productService:ProductsService, private fb:FormBuilder) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      size: ['', Validators.required],
      state: ['', Validators.required],
      price: [null, [Validators.required, Validators.min(1)]],
      color: ['', Validators.required],
    });
  }

  publishProduct() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      this.productService.createProduct(productData).subscribe(response => {
        console.log('Product published successfully:', response);
        alert('✅ Product published successfully ✅')
      });
    }
  }
}
