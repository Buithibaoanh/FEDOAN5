import { Component, OnInit } from '@angular/core';
import { CartService } from '../service/cart/cart.service';
import { CheckoutService } from '../service/checkout/checkout.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit{
  constructor(private cartService: CartService , private checkoutSerivce : CheckoutService) {}
  cartItems: any[] = [];
  number: string = '';
  address: string = '';
  email: string = '';
  username: string = '';
  total : number = 0;
  successMessage: boolean = false;
  ngOnInit(): void {
    this.cartService.getCartItems().subscribe((items: any[]) => {
      this.cartItems = items;
      console.log(this.cartItems);
      
      this.updateTotal();
    });
  }

  private updateTotal(): void {
    this.total = this.cartService.getTotalPrice();
  }

  post(){
    console.log(typeof(this.cartItems));
    
    let body = {
      Hoten: this.username,
      Sdt: this.number,
      Email: this.email,
      Diachi: this.address,
      Tongtien: this.total,
      Sanphamjson: JSON.stringify(this.cartItems)
      
    }


    
    
    this.checkoutSerivce.post(body).subscribe((res) =>{
        console.log(res);
        this.cartService.clearCart();
      });
    
      alert("Thanh toán thành công! Cảm ơn bạn đã mua hàng.")  
  }
}
