import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductserviceService } from "../productservice.service";

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {

  
  prodid: any;

  constructor(private  ar:ActivatedRoute,){}
  ngOnInit(): void {
    this.ar.params.subscribe((data:any)=>{
      this.prodid=data["id"]
      
    })
  }
}
