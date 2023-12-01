import { Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-end',
  templateUrl: './end.component.html',
  styleUrl: './end.component.css'
})
export class EndComponent {

  total!: number;
  fName: string = '';

  constructor(private cartService: CartService){

    this.total = this.cartService.calcTotal();
    this.fName = this.cartService.fName;
  }

}
