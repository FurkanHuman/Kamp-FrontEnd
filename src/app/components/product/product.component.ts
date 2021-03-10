import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { product } from 'src/app/models/Product'
import { ProductResponseModel } from "src/app/models/ProductResponseModel";
import { ProductService } from "src/app/sevices/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: product[] = [];
  dataLoaded=false;
  constructor(private productservice: ProductService) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    console.log("1")
    this.productservice.getProducts().subscribe(response => {
        this.products = response.data
        this.dataLoaded=true;
      })
    console.log("Bitti")
  }
}
