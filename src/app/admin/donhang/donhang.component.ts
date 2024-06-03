import { HttpResponse } from '@angular/common/http';
import {DonhangService} from '../service/donhang/donhang.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css']
})
export class DonhangComponent {
  constructor(private donhangService : DonhangService ,private router: Router) {}
    DonhangDataApi: any = [];
    DonHangGetByIdData:any = [];
    TrangThai: any;
    p: number = 1;
    modalType: 'create' | 'update' = 'create';

    ngOnInit(): void {
        this.getData();
    }
    getData(){
      this.donhangService.getList().subscribe((res) => {
          this.DonhangDataApi = res;
      
      })
    }
    showModal(type: 'create' | 'update') 
    {
      document.querySelector('.manager__modal')?.classList.add('active');
      document.querySelector('.manager__modal-content')?.classList.add('scale-up-center');
      this.modalType = type;
    }

    closeModal() 
    {
      document.querySelector('.manager__modal')?.classList.remove('active');
      document.querySelector('.manager__modal-content')?.classList.remove('scale-up-center');
    }

    editModalDepartment(Id: number) 
    {
      this.showModal('update');
      this.getByIdDonHang(Id);
    }

    submitForm() 
    {
      if (this.modalType === 'update') {
          
          // this.updateDonHang();;
      }
      // Đóng modal sau khi tạo mới hoặc cập nhật
      this.closeModal();
    }
    getByIdDonHang(Id: number )
    {
      this.donhangService.getBydonhangId(Id).subscribe(res => {
          this.DonHangGetByIdData = res[0];
          
      })
    }
    updateDonHang(Id: number)
    {
        let body = 
        {
            TrangThai : 1
        } 
    
        this.donhangService.putdonhang(Id, body).subscribe(res => 
        {
            this.getData();
            window.location.href = "/admin/sanpham";
        });       
    }


    
    viewChitietDH(MaDonHang: number ) {       
      this.router.navigate(['/admin/chitietdonhang', MaDonHang]);
    }

    onStatusChange(event: any, maDonHang: number) {
        const selectedValue = event.target.value;
    
        switch (selectedValue) {
          case 'refuse':
            this.refuseDonHang(maDonHang);
            break;
          case 'approve':
            this.approveDonHang(maDonHang);
            break;
          case 'delivered':
            this.deliverDonHang(maDonHang);
            break;
          case 'cancel':
            this.cancelDonHang(maDonHang);
            break;
          default:
            break;
        }
    }

    refuseDonHang(maDonHang: number): void {
        const body = { TrangThai: 3 };
        let id = maDonHang;
        this.donhangService.refuseDonHang(id, body).subscribe(
          (res: HttpResponse<any>) => {
            console.log(res.status);
            alert('Cập nhật trạng thái thành công');
            this.getData();
          },
          (error) => {
            alert(`${error.error.message}`);
          }
        );
    }

    cancelDonHang(maDonHang: number): void {
        const body = { TrangThai: 4 };
        let id = maDonHang;
        this.donhangService.cancelDonHang(id, body).subscribe(
          (res: HttpResponse<any>) => {
            console.log(res.status);
            alert('Cập nhật trạng thái thành công');
            this.getData();
          },
          (error) => {
            alert(`${error.error.message}`);
          }
        );
    }

    

    approveDonHang(maDonHang: number) {
        const body = { TrangThai: 1 };
        let id = maDonHang;
        this.donhangService.updateStatus(id, body).subscribe(
          (res: HttpResponse<any>) => {
            console.log(res.status);
            alert('Cập nhật trạng thái thành công');
            this.getData();
          },
          (error) => {
            alert(`${error.error.message}`);
          }
        );
    }

    deliverDonHang(maDonHang: number) {
        const body = { TrangThai: 2 };
        let id = maDonHang;
        this.donhangService.updateStatus(id, body).subscribe(
          (res: HttpResponse<any>) => {
            console.log(res.status);
            alert('Cập nhật trạng thái thành công');
            this.getData();
          },
          (error) => {
            alert(`${error.error.message}`);
          }
        );
    }
}
