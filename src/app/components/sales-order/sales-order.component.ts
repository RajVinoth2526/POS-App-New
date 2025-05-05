import { Component, OnInit } from '@angular/core';
import { CartItem, Product } from 'src/assets/product.model';
@Component({
  selector: 'app-sales-order',
  templateUrl: './sales-order.component.html',
  styleUrls: ['./sales-order.component.css']
})
export class SalesOrderComponent implements OnInit {

  constructor() { }

  cart: CartItem[] = [];

  ngOnInit(): void {
  }
  
  addToCart(product: Product) {
    const existingItem = this.cart.find(item => item.product.name === product.name);
    
    if (existingItem) {
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.quantity * product.price;
    } else {
      this.cart.push({
        product,
        quantity: 1,
        totalPrice: product.price
      });
    }
  }
}
