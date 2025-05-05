import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CartItem } from 'src/assets/product.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  @Input() cart: CartItem[] = [];
  @Output() cartChange = new EventEmitter<any[]>();

  // Define the card object with some dummy data
  get total(): number {
    return this.cart.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
    this.cartChange.emit(this.cart);
  }

  checkout(item : CartItem) {
    alert('Order placed!');
    this.cart = [];
    this.cartChange.emit([]);
  }

  getTotalAmount(): number {
    return this.cart.reduce((sum, item) => sum + item.totalPrice, 0);
  }

  removeFromCart(index: number) {
    this.cart.splice(index, 1);
  }

  increaseQuantity(index: number) {
    this.cart[index].quantity++;
    this.cart[index].totalPrice = this.cart[index].quantity * this.cart[index].product.price;
  }
  
  decreaseQuantity(index: number) {
    if (this.cart[index].quantity > 1) {
      this.cart[index].quantity--;
      this.cart[index].totalPrice = this.cart[index].quantity * this.cart[index].product.price;
    } else {
      // Optional: if quantity becomes 0, you can remove the item
      this.removeFromCart(index);
    }
  }
  
  
  
}
