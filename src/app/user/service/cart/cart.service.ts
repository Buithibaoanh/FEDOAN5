import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItemsSubject: BehaviorSubject<any[]>;


  constructor() {
    const storedCart = localStorage.getItem('cart');
    this.cartItemsSubject = new BehaviorSubject<any[]>(JSON.parse(storedCart || '[]'));
  }

  addToCart(item: any): void {
    console.log(item);

    console.log(this.cartItemsSubject.value);
    
    
    const currentItems = this.cartItemsSubject.value;
    const existingItem = currentItems.find(cartItem => cartItem.MaSanPham === item.MaSanPham);
  
    if (existingItem) {
      // Sản phẩm đã tồn tại trong giỏ, cộng thêm 1 vào số lượng
      existingItem.quantity += 1;
      existingItem.totalPrice = existingItem.Gia * existingItem.quantity;
    } else {
      // Sản phẩm chưa có trong giỏ, thêm mới vào giỏ
      const updatedItems = [...currentItems, { ...item, quantity: 1, totalPrice: item.Gia }];
      this.cartItemsSubject.next(updatedItems);
    }
  
    // Cập nhật giỏ hàng
    this.updateCart();
  }
  

  getCartItems(): Observable<any[]> {
    return this.cartItemsSubject.asObservable();
  }

  getTotalPrice(): number {
    const currentItems = this.cartItemsSubject.value;
    return currentItems.reduce((total, item) => total + item.totalPrice, 0);
  }

//   removeFromCart(index: number): void {
//     const currentItems = this.cartItemsSubject.value;
//     const updatedItems = currentItems.filter((_, i) => i !== index);
//     this.cartItemsSubject.next(updatedItems);
//     this.updateCart();
//   }
removeFromCart(index: number): void {
    console.log('Before removing:', this.cartItemsSubject.value);
  
    const currentItems = this.cartItemsSubject.value;
  
    if (index >= 0 && index < currentItems.length) {
      const updatedItems = currentItems.filter((_, i) => i !== index);
  
      console.log('After removing:', updatedItems);
  
      this.cartItemsSubject.next(updatedItems);
      this.updateCart();
  
      // Cập nhật LocalStorage
      localStorage.setItem('cart', JSON.stringify(updatedItems));
    } else {
      console.error('Invalid index for removeFromCart:', index);
    }
  }
  
  clearCart(): void {
    // Clear the cart items
    this.cartItemsSubject.next([]);
  
    // Update LocalStorage
    localStorage.removeItem('cart');
    console.log("hi");
    
    

  }
  
  
  

  updateCart(): void {
    const currentItems = this.cartItemsSubject.value;
    const updatedItems = currentItems.map((item) => ({
      ...item,
      totalPrice: item.Gia * item.quantity,
    }));
    this.cartItemsSubject.next(updatedItems);
    localStorage.setItem('cart', JSON.stringify(updatedItems));
  }
}
