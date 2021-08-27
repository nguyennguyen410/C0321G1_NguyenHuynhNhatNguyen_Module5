import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../service/product.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";
import {ProductTypeService} from "../../service/product-type.service";
import {ProductType} from "../../model/product-type";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product;
  productTypes: ProductType[] = [];

  constructor(private productService: ProductService,
              private activatedRoute: ActivatedRoute,
              private productTypeService: ProductTypeService,
              private router: Router) {

  }

  productForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    productType: new FormControl(),
    price: new FormControl(),
    description: new FormControl(),
  });

  ngOnInit(): void {
    const id = Number(this.activatedRoute.snapshot.params.id);
    this.productTypeService.getAll().subscribe(value =>
      this.productTypes = value);
    this.productService.findById(id).subscribe(value => {
      this.product = value;
      this.productForm.setValue(this.product);
    });
  }


  submit() {
    const product = this.productForm.value;
    this.productService.editProduct(product.id, product).subscribe(() => {
      alert('Update thành công');
      this.router.navigateByUrl('product/list');
    });
  }
}
