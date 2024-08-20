import { Component } from '@angular/core';
import { ServiceService } from '../../services/service.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  constructor(private api:ServiceService) {   
  }
  ngOnInit(){
 this.api.showUsers().subscribe((res)=>{
    console.log(res); 
  });
  
  }
}
