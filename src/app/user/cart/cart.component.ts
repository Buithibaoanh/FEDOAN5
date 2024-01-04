import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  cartItems: any[] = [];
  i: number = 0; 
  total: number = 0;
  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items: any[]) => {
      this.cartItems = items;
      console.log(this.cartItems);
      
      this.updateTotal();
    });
  }

  removeFromCart(index: number): void {
    
    this.cartService.removeFromCart(index);
    this.updateTotal();
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  private updateTotal(): void {
    this.total = this.cartService.getTotalPrice();
  }
  increaseQuantity(cartItem: any): void {
    cartItem.quantity++;
    cartItem.totalPrice = cartItem.Gia * cartItem.quantity;
    this.cartService.updateCart();
    this.updateTotal();
  }

  decreaseQuantity(cartItem: any): void {
    if (cartItem.quantity > 1) {
      cartItem.quantity--;
      cartItem.totalPrice = cartItem.Gia * cartItem.quantity;
      this.cartService.updateCart();
      this.updateTotal();
    }
  }

  
}
