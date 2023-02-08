import { Component, OnInit } from '@angular/core';
import { ProductserviceService } from '../productservice.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
  
  productlist:any
  filterproducts:any

  constructor(private ps:ProductserviceService){}

  ngOnInit(): void{
    this.ps.viewAllProducts().subscribe((data:any)=>{
      // console.log(data);
      this.productlist=data
      
    })
  }
  filter(category:any){
   this.filterproducts=this.productlist.filter((item:any)=>{
      if(item.categoryId==category || category==""){
        return item
      }
    })
  }

}
