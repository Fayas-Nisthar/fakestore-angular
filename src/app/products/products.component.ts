import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {

    products:any

    constructor(private service:UserService){
      this.service.getProducts().subscribe(data=>this.products=data)
    }
}
