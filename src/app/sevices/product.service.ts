import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductResponseModel } from '../models/ProductResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = "https://localhost:44355/api/products/getall"
  
  constructor(private httpClient: HttpClient) { }
  
  getProducts():Observable<ProductResponseModel> {
  return  this.httpClient.get<ProductResponseModel>(this.apiUrl);
  }
}
