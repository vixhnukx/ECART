import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductserviceService {
  httpclient: any;

  constructor(private http:HttpClient) { }




  // http request  view all products
  viewAllProducts(){
   return this.http.get("http://localhost:3000/products")
  }
  addProduct(newProduct:any){
   return this.httpclient.post("http://localhost:3000/products",newProduct)
  }
}
