import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrangchuService } from '../service/trangchu/trangchu.service';
import { CartService } from '../service/cart/cart.service';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private trangchu: TrangchuService, private cartService : CartService,private decimalPipe: DecimalPipe){}
  MaSanPham: any;
  Data: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.MaSanPham = params['id'];
      
      this.get();
    })
  }

  get(){
    this.trangchu.getById(this.MaSanPham).subscribe(data => {
      this.Data = data;
           
    })
  }

  add(item : any){
    console.log(item);
    this.cartService.addToCart(item);
    alert("Bạn đã thêm thành công sản phẩm vào giỏ hàng")   
  }


}
