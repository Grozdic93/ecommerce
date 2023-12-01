import { Component, OnInit } from '@angular/core';
import { IProducts } from '../i-products';
import { CartService } from '../cart.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit{

  products!: IProducts[];
  total! : number;
  fName: string= 'Dusan';
  constructor(private cartService:CartService,
    private route: ActivatedRoute,
    private router : Router){}


  onDeleteItem(id : number){
    this.cartService.deleteItem(id);
    this.products= this.cartService.getCart();
    this.total = this.cartService.calcTotal();
  }
  onClearCart(){
    this.cartService.clearCart();
    this.products= this.cartService.getCart();
    this.total = this.cartService.calcTotal();
  }

  onDecreaseQtty(id : number){
    this.cartService.decreaseQtty(id);
    this.total = this.cartService.calcTotal();
    this.products = this.cartService.getCart();
  }

  onIncreaseQtty(id : number){
    this.cartService.increaseQtty(id);
    this.total = this.cartService.calcTotal();
  }

  onSubmitData(){

    this.cartService.fName = this.fName;
    this.router.navigate(['/end']).then(null)
  }


  ngOnInit(): void {
    this.total = this.cartService.calcTotal();
    this.products = this.cartService.getCart();
    console.log(this.products);
   
    
    
  }
}
