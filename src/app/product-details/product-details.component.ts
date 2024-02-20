import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  id:any
  productData:any
  constructor(private route:ActivatedRoute,private service:UserService){
    this.id=this.route.snapshot.params["pk"]
    this.service.retrieveProductsData(this.id).subscribe(data=>this.productData=data)
  }

}
