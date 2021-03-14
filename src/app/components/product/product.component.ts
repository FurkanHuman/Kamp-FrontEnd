import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { product } from 'src/app/models/Product'
import { ProductService } from "src/app/sevices/product.service";

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  products: product[] = [];
  dataLoaded=false;
  constructor(private productservice: ProductService,
     private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe(params=>{
      if(params["categoryId"])
      this.getProductsByCategory(params["categoryId"])
      else
      this.getProducts()
    })

  }

  getProducts() {
    this.productservice.getProducts().subscribe(response => {
        this.products = response.data
        this.dataLoaded=true;
      })
  }

  getProductsByCategory(categoryId:number) {
    this.productservice.getProductsByCategory(categoryId).subscribe(response => {
        this.products = response.data
        this.dataLoaded=true;
      })
  }
}
