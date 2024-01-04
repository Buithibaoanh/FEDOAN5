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
          
          this.updateDonHang();;
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
    updateDonHang()
    {
      let body = 
      {
        TrangThai : this.DonHangGetByIdData.TrangThai
      } 
      var id = this.DonHangGetByIdData.MaDonHang;
      console.log(id);
    
      this.donhangService.putdonhang(id, body).subscribe(res => 
        {
          this.getData();
        });       
    }


    
    viewChitietDH(MaDonHang: number ) {       
      this.router.navigate(['/admin/chitietdonhang', MaDonHang]);
    }


}
