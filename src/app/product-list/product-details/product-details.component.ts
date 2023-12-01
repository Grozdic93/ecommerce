import { Component, OnInit } from '@angular/core';
import { IProducts } from '../../i-products';
import { ActivatedRoute } from '@angular/router';
import { product } from '../../products';
import { CartService } from '../../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent implements OnInit{
  id: number = 0;
  product!: IProducts;

  constructor(private route: ActivatedRoute, private cartService : CartService){

  }

  onAddToCart(){
    alert('item added to cart');
    this.cartService.addToCart(this.product);
   
    
  }



  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.product = product[this.id];
    
    
    
    
  }

}
