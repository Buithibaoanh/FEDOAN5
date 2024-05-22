import { Component, ViewEncapsulation } from '@angular/core';
import { TrangchuService } from '../../service/trangchu/trangchu.service';
import { CartService } from '../../service/cart/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', ],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  constructor(private trangchuService : TrangchuService, private router: Router, private cartService : CartService) {}
    TrangChuLSPApi: any = [];
    cartItems: any;
    keyword: any;
    ngOnInit(): void {
      this.getLoaisanpham();
      this.cartService.getCartItems().subscribe((items: any[]) => {
        this.cartItems = items.length;
      });
    }
    
    getLoaisanpham(){
      this.trangchuService.getLoaisp().subscribe((res) => {
          this.TrangChuLSPApi = res;
      
        })
    }
    viewCategori(MaLoai: number ) {      
      this.router.navigate(['categori', MaLoai]);
    }
    
   
      
}
