import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NhacungcapService } from '../service/nhacungcap.service';


@Component({
  selector: 'app-nhacungcap',
  templateUrl: './nhacungcap.component.html',
  styleUrls: ['./nhacungcap.component.css']
})
export class NhacungcapComponent {
  constructor(private nhacungcapService : NhacungcapService) {}
    NhacungcapData: any = [];
    modalType: 'create' | 'update' = 'create';
    TenNhaCungCap: any;
    DiaChi: any;
    SodienThoai: any;
    NhaCCByIdData: any = [];
    keyword: any;
    p: number = 1;
    ngOnInit(): void {
        this.getData();
    }

    getData(){
        this.nhacungcapService.getList().subscribe((res) => {
            this.NhacungcapData = res;
        
        })
    }

    showModal(type: 'create' | 'update') {
        document.querySelector('.manager__modal')?.classList.add('active');
        document.querySelector('.manager__modal-content')?.classList.add('scale-up-center');
        this.modalType = type;
    }

    closeModal() {
        document.querySelector('.manager__modal')?.classList.remove('active');
        document.querySelector('.manager__modal-content')?.classList.remove('scale-up-center');
    }

    editModalDepartment(Id: number) {
        this.showModal('update');
        this.getById(Id);
    }

    submitForm() {
        if (this.modalType === 'create') {
            // Thực hiện xử lý tạo mới
            this.createNhaCungCap();
        } else {
            // Thực hiện xử lý cập nhật
            this.updateNhaCungCap();
        }
        // Đóng modal sau khi tạo mới hoặc cập nhật
        this.closeModal();
    }

    getById(Id: number ){
        this.nhacungcapService.getById(Id).subscribe(res => {
            this.NhaCCByIdData = res[0];
            
        })
    }

    createNhaCungCap(){

        let body = {
            TenNCC: this.TenNhaCungCap,
            DiaChi: this.DiaChi,
            SĐT: this.SodienThoai

        }

        this.nhacungcapService. postQLNhaCC(body).subscribe(res => {
            this.closeModal();
            this.getData();
        })
        
    }

    updateNhaCungCap(){
        let body = {
            TenLoai : this.NhaCCByIdData.TenNhaCungCap
        } 
        var id = this.NhaCCByIdData.SodienThoai;
        console.log(id);
        
        this.nhacungcapService.putQLNhaCC(id, body).subscribe(res => {
            this.getData();
        });       
    }
    updateLoaiSp(){
        
      let body = {
          TenNhaCungCap : this.NhaCCByIdData.TenSanPham,
          DiaChi : this.NhaCCByIdData.MaLoai,
          SodienThoai : this.NhaCCByIdData.Anh,
          
      }         
      var id = this.NhaCCByIdData.SodienThoai;
      this.nhacungcapService.putQLNhaCC(id, body).subscribe(res => {
          console.log(res);
          
          this.getData();
          alert("Sửa sản phẩm thành công.")     
      });  
  }

    deleteLoaiSp(Id: number){
        this.nhacungcapService.deleteQLNhaCC(Id).subscribe(res => {
            this.getData();
            
        })
    }
    // search() {
    //     if (!this.keyword) {
    //         this.nhacungcapService.getList().subscribe(res => {
    //             this.LoaiSanPhamDataApi = res;
    //         });
    //     } else {
    //         var data = {
    //             keyword: this.keyword
    //         }
    //         this.loaisanphamService.search(data).subscribe(res => {
    //             this.LoaiSanPhamDataApi = res;
    //         });
    //     }
    //     // console.log(this.keyword);
    //     // var data = {
    //     //     keyword: this.keyword
    //     // }
    //     // this.sanphamService.search(data).subscribe(res => {
    //     //     this.SanPhamDataApi = res;
    //     // })
    // }

}
