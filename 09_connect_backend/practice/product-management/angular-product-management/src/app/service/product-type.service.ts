import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Product} from "../model/product";
import {Observable} from "rxjs";
import {ProductType} from "../model/product-type";

@Injectable({
  providedIn: 'root'
})
export class ProductTypeService {

  private API_URL = "http://localhost:3000/productType";

  constructor(private httpClient: HttpClient) { }

  productTypes: ProductType[] = [];

  getAll(): Observable<ProductType[]> {
    return this.httpClient.get<ProductType[]>(this.API_URL);
  }
}
