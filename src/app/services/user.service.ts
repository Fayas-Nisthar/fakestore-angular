import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  getProducts(){
    return this.http.get("https://fakestoreapi.com/products/")
  }
  retrieveProductsData(id:Number){
    return this.http.get(`https://fakestoreapi.com/products/${id}`)
  }
}
