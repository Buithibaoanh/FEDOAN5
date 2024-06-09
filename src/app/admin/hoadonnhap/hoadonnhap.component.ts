import { Component } from '@angular/core';
import { HoadonnhapService } from '../service/hoadonnhap.service';
import { Router } from '@angular/router';
import { SanphamService } from '../service/sanpham/sanpham.service';
import { NhacungcapService } from '../service/nhacungcap.service';


@Component({
  selector: 'app-hoadonnhap',
  templateUrl: './hoadonnhap.component.html',
  styleUrls: ['./hoadonnhap.component.css']
})
export class HoadonnhapComponent {
  constructor(private hoadonnhapService : HoadonnhapService ,private router: Router,private SanphamService: SanphamService,private NhacungcapService: NhacungcapService) {}
  modalType: 'create' | 'update' = 'create'; // Khai báo và khởi tạo modalType
  hoadonnhap: any[] = [];
  MaSanPham: any;
  SoLuong: number = 0;
  Gia: number = 0;
  dataDropdown: any = [];
  dataDropdownSanPham: any = [];
  MaNhaCungCap: any;
  
  p: number = 1;
  ngOnInit(): void {
    this.getHoaDonNhap();
  }

  getHoaDonNhap(): void {
    this.hoadonnhapService.getHoaDonNhap().subscribe(
      (data: any[]) => {
        this.hoadonnhap = data;
      },
      (error: any) => {
        console.error('Error fetching data', error);
      }
    );
  }
  getDropdownNCC() {
    this.NhacungcapService.getList().subscribe(res => {
        this.dataDropdown = res;
    })
  }

  getDropdownSanPham() {
    this.SanphamService.getList().subscribe((res: any) => {
      this.dataDropdownSanPham = res;
    });
  }
  showModal(type: 'create' | 'update') {
    document.querySelector('.manager__modal')?.classList.add('active');
    document.querySelector('.manager__modal-content')?.classList.add('scale-up-center');
    this.getDropdownNCC();
    this.getDropdownSanPham();
    this.modalType = type;
  }

  closeModal() {
      document.querySelector('.manager__modal')?.classList.remove('active');
      document.querySelector('.manager__modal-content')?.classList.remove('scale-up-center');
  }



submitForm() {
    if (this.modalType === 'create') {
        // Thực hiện xử lý tạo mới
        this.Them();
    } 
    // Đóng modal sau khi tạo mới hoặc cập nhật
    this.closeModal();
}

  Them() {
    const data = {
      MaSanPham: this.MaSanPham,
      SoLuong: this.SoLuong,
      Gia: this.Gia,
      MaNhaCungCap: this.MaNhaCungCap
    };

    this.hoadonnhapService.Them(data).subscribe(
      (response: any) => {
        this.getHoaDonNhap()
        alert("Thêm thành công") // Xử lý phản hồi từ API nếu cần
      },
      (error: any) => {
        console.error(error); // Xử lý lỗi nếu có
      }
    );
  }
}
