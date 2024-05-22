import { Component } from '@angular/core';
import { KhoService } from '../service/kho.service';
import { Router } from '@angular/router';
import { SanphamService } from '../service/sanpham/sanpham.service';


@Component({
  selector: 'app-kho',
  templateUrl: './kho.component.html',
  styleUrls: ['./kho.component.css']
})
export class KhoComponent {
  constructor(private khoService : KhoService, 
    private router: Router,
    private sanphamService: SanphamService) {}
    LoaiSanPhamDataApi: any = [];
    modalType: 'create' | 'update' = 'create';
    TenKho: any;
    DiaChi: any;
    MaKho: any;
    MaSanPham: any;
    SoLuong: any;
    LoaiSanPhamGetByIdData: any = [];
    p: number = 1;
    dataDropdown: any = [];
    dataDropdownSanPham: any = [];
    ngOnInit(): void {
        this.getData();
    }

    getData(){
        this.khoService.getList().subscribe((res) => {
            this.LoaiSanPhamDataApi = res;
        
        })
    }

    showModal(type: 'create' | 'update') {
        document.querySelector('#model1')?.classList.add('active');
        document.querySelector('#content1')?.classList.add('scale-up-center');
        this.modalType = type;
    }

    closeModal() {
        document.querySelector('#model1')?.classList.remove('active');
        document.querySelector('#content1')?.classList.remove('scale-up-center');
    }

    editModalDepartment(Id: number) {
        this.showModal('update');
        this.getById(Id);
    }

    submitForm() {
        if (this.modalType === 'create') {
            // Thực hiện xử lý tạo mới
            this.createLoaiSp();
        } else {
            // Thực hiện xử lý cập nhật
            this.updateLoaiSp();
        }
        // Đóng modal sau khi tạo mới hoặc cập nhật
        this.closeModal();
    }

    getById(Id: number ){
        this.khoService.getById(Id).subscribe(res => {
            this.LoaiSanPhamGetByIdData = res[0];
            
        })
    }

    createLoaiSp(){

        let body = {
            TenKho: this.TenKho,
            DiaChi: this.DiaChi
        }

        this.khoService.postLoaiSp(body).subscribe(res => {
            this.closeModal();
            this.getData();
        })
        
    }

    updateLoaiSp(){
        let body = {
            TenKho : this.LoaiSanPhamGetByIdData.TenKho,
            DiaChi: this.LoaiSanPhamGetByIdData.DiaChi
        } 
        var id = this.LoaiSanPhamGetByIdData.MaKho;
        console.log(id);
        
        this.khoService.putLoaiSp(id, body).subscribe(res => {
            this.getData();
        });       
    }

    deleteLoaiSp(Id: number){
        this.khoService.deleteLoaiSp(Id).subscribe(res => {
            this.getData();
            
        })
    }

    XemKho(Id: number){
      this.router.navigate(['/admin/detailsKho', Id]);
    }

    getDropdownKho() {
      this.khoService.getList().subscribe(res => {
          this.dataDropdown = res;
      })
    }

    getDropdownSanPham() {
      this.sanphamService.getList().subscribe(res => {
          this.dataDropdownSanPham = res;
      })
    }

    CreateKho() {
      document.querySelector('#model2')?.classList.add('active');
      document.querySelector('#content2')?.classList.add('scale-up-center');
      this.getDropdownKho();
      this.getDropdownSanPham();
    }

    submitFormThem() {
      let body = {
        MaKho: this.MaKho,
        MaSanPham: this.MaSanPham,
        SoLuong: this.SoLuong
      }

      this.khoService.Them(body).subscribe(res => {
        document.querySelector('#model2')?.classList.remove('active');
        document.querySelector('#content2')?.classList.remove('scale-up-center');
          this.getData();
      })
    }
}
