import { HttpResponse } from '@angular/common/http';
import {DonhangService} from '../service/donhang/donhang.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SendmailService } from 'src/app/user/service/sendmail/sendmail.service';

@Component({
  selector: 'app-donhang',
  templateUrl: './donhang.component.html',
  styleUrls: ['./donhang.component.css']
})
export class DonhangComponent {
  constructor(private donhangService : DonhangService ,private router: Router, private sendMailService : SendmailService) {}
    DonhangDataApi: any = [];
    DonHangGetByIdData:any = [];
    TrangThai: any;
    p: number = 1;
    modalType: 'create' | 'update' = 'create';
    
    searchCriteria = {
      trangThai: '' // Khởi tạo searchCriteria với trangThai là một chuỗi rỗng
    };

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
    updateDonHang(Id: number, email: string)
    {
        const body = { TrangThai: 2 };
        let id = Id;
        let data = {
          email
        }
        this.sendMailService.sendDangGiao(data).subscribe((res) => {})
        this.donhangService.putdonhang(id, body).subscribe(
          (res: HttpResponse<any>) => {
            alert('Cập nhật trạng thái thành công');
            this.getData();
          },
          (error) => {
            alert(`${error.error.message}`);
          }
        );
    }


    
    viewChitietDH(MaDonHang: number ) {       
      this.router.navigate(['/admin/chitietdonhang', MaDonHang]);
    }

    onStatusChange(event: any, maDonHang: number, email: string) {
        const selectedValue = event.target.value;
    
        switch (selectedValue) {
          case 'refuse':
            this.refuseDonHang(maDonHang);
            break;
          case 'approve':
            this.approveDonHang(maDonHang);
            break;
          case 'updateDonHang':
            this.updateDonHang(maDonHang, email);
            break;
          case 'cancel':
            this.cancelDonHang(maDonHang);
            break;
          case 'deliver':
            this.deliverDonHang(maDonHang, email);
            break;
          default:
            break;
        }
    }

    refuseDonHang(maDonHang: number): void {
        const body = { TrangThai: 2 };
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
        const body = { TrangThai: 3 };
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

    deliverDonHang(maDonHang: number, email: string) {
        const body = { TrangThai: 1 };
        let id = maDonHang;
        let data = {
            email,
            maDonHang
        }
        this.sendMailService.sendConfirm(data).subscribe((res) => {})
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
    
  
    onSearch() {
      if (!this.searchCriteria.trangThai) {
        this.donhangService.getList().subscribe((res) => {
          this.DonhangDataApi = res;
        });
      } else {
        this.donhangService.searchOrders(this.searchCriteria).subscribe((data) => {
          this.DonhangDataApi = data;
        });
      }
    }
    getStatusText(trangThai: number): string {
      switch (trangThai) {
        case 0: return 'Chờ xác nhận';
        case 1: return 'Đã xác nhận';
        case 2: return 'Đang giao hàng';
        case 3: return 'Giao thành công';
        case 4: return 'Đã hoàn hàng';
        default: return 'Trạng thái không xác định';
      }
    }

}
