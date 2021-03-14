import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  apiUrl = "https://localhost:44355/api/"
  
  constructor(private httpClient: HttpClient,) { }


  getProducts():Observable<ListResponseModel<product>> {
    let newPath=this.apiUrl+"products/getall"
    return  this.httpClient.get<ListResponseModel<product>>(newPath);
    }

  getProductsByCategory(categoyrId:number):Observable<ListResponseModel<product>> {
    let newPath=this.apiUrl+"products/getbycategory?categoryId="+categoyrId
  return  this.httpClient.get<ListResponseModel<product>>(newPath);
  }
}
