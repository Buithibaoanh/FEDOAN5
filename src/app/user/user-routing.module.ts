import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TrangchuComponent } from './trangchu/trangchu.component';
import { DetailComponent } from './detail/detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CategoriComponent } from './categori/categori.component';
import { DecimalPipe } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: TrangchuComponent
  },
  {
    path: 'details/:id',
    component: DetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  },
  {
    path: 'categori/:id',
    component: CategoriComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [DecimalPipe],
})
export class UserRoutingModule { }
