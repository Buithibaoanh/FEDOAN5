import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { QuanLySanPhamComponent } from './quan-ly-san-pham/quan-ly-san-pham.component';
import { DonhangComponent } from './donhang/donhang.component';
import { ChitietdonhangComponent } from './chitietdonhang/chitietdonhang.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { ThongketheothangComponent } from './thongketheothang/thongketheothang.component';
import { KhoComponent } from './kho/kho.component';
import { DetailKhoComponent } from './detail-kho/detail-kho.component';
import { NhacungcapComponent } from './nhacungcap/nhacungcap.component';
import { KhachhangComponent } from './khachhang/khachhang.component';
import { HoadonnhapComponent } from './hoadonnhap/hoadonnhap.component';
import { KhachHangOderComponent } from './khach-hang-oder/khach-hang-oder.component';
import { ChitiethoadonnhapComponent } from './chitiethoadonnhap/chitiethoadonnhap.component';

const routes: Routes = [
  {
    path: 'trangchu',
    component: TrangchuComponent
  },
  {
      path: 'loaisp',
      component: LoaisanphamComponent
  },
  {
    path: 'sanpham',
    component: QuanLySanPhamComponent
  },
  {
    path: 'kho',
    component: KhoComponent
  },
  {
    path: 'detailsKho/:id',
    component: DetailKhoComponent
  },
  {
    path: 'donhang',
    component: DonhangComponent
  },
  {
    path: 'chitietdonhang/:id',
    component: ChitietdonhangComponent
  },
  {
    path: 'thongketheongay',
    component: ThongkeComponent
  },
  {
    path: 'thongketheothang',
    component: ThongketheothangComponent
  },
  {
    path: 'nhacungcap',
    component: NhacungcapComponent
  },
  {
    path: 'khachhang',
    component: KhachhangComponent
  },
  {
    path: 'hoadonnhap',
    component: HoadonnhapComponent
  },
  {
    path: 'khachhangdonhang/:id',
    component: KhachHangOderComponent
  },
  {
    path: 'chitiethoadonnhap/:id',
    component: ChitiethoadonnhapComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
