import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.product = this.productService.findById(id);
  }

  ngOnInit(): void {
    this.productForm.setValue(this.product);
  }

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  submit() {
    const product = this.productForm.value;
    this.productService.editProduct(product);
    this.productForm.reset();
    this.router.navigateByUrl('product/list');
  }
}
