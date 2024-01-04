import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';

import { TrangchuComponent } from './trangchu/trangchu.component';
import { LoaisanphamComponent } from './loaisanpham/loaisanpham.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { FormsModule } from '@angular/forms';
import { QuanLySanPhamComponent } from './quan-ly-san-pham/quan-ly-san-pham.component';
import { HttpClientModule } from '@angular/common/http';
import { DonhangComponent } from './donhang/donhang.component';
import { ChitietdonhangComponent } from './chitietdonhang/chitietdonhang.component';
import { ThongkeComponent } from './thongke/thongke.component';
import { ThongketheothangComponent } from './thongketheothang/thongketheothang.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    AdminComponent,
    TrangchuComponent,
    LoaisanphamComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    LayoutComponent,
    QuanLySanPhamComponent,
    DonhangComponent,
    ChitietdonhangComponent,
    ThongkeComponent,
    ThongketheothangComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    HttpClientModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
