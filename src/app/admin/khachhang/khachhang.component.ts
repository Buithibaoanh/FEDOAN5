import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { KhachhangService } from '../service/khachhang/khachhang.service';

@Component({
  selector: 'app-khachhang',
  templateUrl: './khachhang.component.html',
  styleUrls: ['./khachhang.component.css']
})
export class KhachhangComponent {
  constructor(private khachhangService : KhachhangService, private router : Router) {}
  khachhangData: any = [];
  TenKhachHang: any;
  DiaChi: any;
  SoDienThoai: any;
  DanhSachDonHang: string = "";
  p: number = 1;
  ngOnInit(): void {
    this.getData();
}

getData(){
    this.khachhangService.getList().subscribe((res) => {
        this.khachhangData = res;
    
    })
}

viewDH( DanhSachDonHang: string ) {
  this.router.navigate(['/admin/khachhangdonhang', DanhSachDonHang]);
  // this.router.navigate(['/admin/chitietdonhang', MaDonHang]);
  console.log(DanhSachDonHang);
}


}
