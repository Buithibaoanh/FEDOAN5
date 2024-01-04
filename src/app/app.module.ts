import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { TrangchuComponent } from './admin/trangchu/trangchu.component';
// import { LoaisanphamComponent } from './admin/loaisanpham/loaisanpham.component';
// import { HeaderComponent } from './admin/shared/header/header.component';
// import { FooterComponent } from './admin/shared/footer/footer.component';
// import { SidebarComponent } from './admin/shared/sidebar/sidebar.component';
// import { LayoutComponent } from './admin/shared/layout/layout.component';
import { FormsModule } from '@angular/forms';
// import { QuanLySanPhamComponent } from './admin/quan-ly-san-pham/quan-ly-san-pham.component';

@NgModule({
  declarations: [
    AppComponent,
    // TrangchuComponent,
    // LoaisanphamComponent,
    // HeaderComponent,
    // SidebarComponent,
    // FooterComponent,
    // LayoutComponent,
    // QuanLySanPhamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
