import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { UserComponent } from './user/user.component';
// import { TrangchuComponent } from './admin/trangchu/trangchu.component';
// import { LoaisanphamComponent } from './admin/loaisanpham/loaisanpham.component';
// import { QuanLySanPhamComponent } from './admin/quan-ly-san-pham/quan-ly-san-pham.component';

const routes: Routes = [
    {
        path: 'admin',
        component: AdminComponent,
        loadChildren: () =>
        import('./admin/admin.module').then((m) => m.AdminModule),
    },
    {
        path: '',
        component: UserComponent,
        loadChildren: () => import('./user/user.module').then((m) => m.UserModule)
    },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
