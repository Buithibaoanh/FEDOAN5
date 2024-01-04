import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { QuanLySanPhamComponent } from './quan-ly-san-pham/quan-ly-san-pham.component';
import { DonhangComponent } from './donhang/donhang.component';
import { ChitietdonhangComponent } from './chitietdonhang/chitietdonhang.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { ThongketheothangComponent } from './thongketheothang/thongketheothang.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
