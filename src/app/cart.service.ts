import { Injectable } from '@angular/core';
import { IProducts } from './i-products';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: IProducts[]=[];
  fName: string= '';
 
  constructor() { }

  addToCart(product: IProducts){
    if(!this.cartItems.includes(product)){
      this.cartItems.push(product);
    }else{
      product.qtty ++;

    }

  }

  getCart(){
    return this.cartItems.slice();
  }

  deleteItem(id : number){
    this.cartItems.splice(id, 1)

  }

  clearCart(){
    this.cartItems = [];
  }

  calcTotal(): number{
    let total:number = 0;
    this.cartItems.forEach(product=>{
      total = total + (product.price * product.qtty);
      
    })
    return total;
  }

  increaseQtty(id:number){

    this.cartItems[id].qtty ++;

  }
  decreaseQtty(id:number){

    if(this.cartItems[id].qtty > 1){
      this.cartItems[id].qtty --;
    }else{
      this.cartItems.splice(id, 1)
    }

    

  }
}
