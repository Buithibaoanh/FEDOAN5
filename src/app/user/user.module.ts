import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { SlideshowComponent } from './shared/slideshow/slideshow.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategoriComponent } from './categori/categori.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    FooterComponent,
    HeaderComponent,
    LayoutComponent,
    TrangchuComponent,
    SlideshowComponent,
    DetailComponent,
    CartComponent,
    CheckoutComponent,
    CategoriComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
