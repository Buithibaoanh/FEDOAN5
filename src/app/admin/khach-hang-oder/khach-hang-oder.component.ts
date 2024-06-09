import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KhachhangService } from '../service/khachhang/khachhang.service';

@Component({
  selector: 'app-khach-hang-oder',
  templateUrl: './khach-hang-oder.component.html',
  styleUrls: ['./khach-hang-oder.component.css']
})
export class KhachHangOderComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private khachhangService : KhachhangService){}
  MaDonHang: any;
  khachhangOder: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.MaDonHang  = params['id'];
      console.log(this.MaDonHang)
    })

    this.getData();
  }

  getData() {
    this.khachhangService.getData(this.MaDonHang).subscribe((res) => {
      this.khachhangOder = res;
  
  })
  }

}
