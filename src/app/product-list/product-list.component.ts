import { Component, OnInit } from '@angular/core';
import { IProducts } from '../i-products';
import { product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent implements OnInit{

  products!: IProducts[];

  ngOnInit(): void {
    this.products = product
  }

}
