import { Component, ElementRef, ViewChild } from '@angular/core';
import { SanphamService } from '../service/sanpham/sanpham.service';
import jsPDF from 'jspdf';
import { LoaisanphamService } from '../service/loaisanpham/loaisanpham.service';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
@Component({
  selector: 'app-quan-ly-san-pham',
  templateUrl: './quan-ly-san-pham.component.html',
  styleUrls: ['./quan-ly-san-pham.component.css']
})
export class QuanLySanPhamComponent {
  constructor(private sanphamService : SanphamService, private loaisanphamService : LoaisanphamService) {}
    public Editor = ClassicEditor;
    SanPhamDataApi: any = [];
    modalType: 'create' | 'update' = 'create';
    MaLoai: any;
    TenLoai:string = '';
    TenSanPham:string = '';
    Anh:string = '';
    SoLuong: any;
    Gia: any;
    Mota:string = '';
    SanPhamGetByIdData: any = [];
    MaSanPham: any;
    dataDropdown: any;
    keyword: any;
    @ViewChild('pdfContent') pdfContent!: ElementRef;
    
    p: number = 1;

    
    ngOnInit(): void {
        this.getData();
        this.getDropdownKho();
    }

    getDropdownKho() {
        this.loaisanphamService.getList().subscribe(res => {
            this.dataDropdown = res;
        })
      }
    

    getData() {
        this.sanphamService.getList().subscribe((res) => {
          // Gọi hàm để tạo PDF khi dữ liệu đã được nhận
          this.SanPhamDataApi = res;
        });
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
            this.createLoaiSp();
        } else {
            // Thực hiện xử lý cập nhật
            this.updateLoaiSp();
        }
        // Đóng modal sau khi tạo mới hoặc cập nhật
        this.closeModal();
    }

    getById(Id: number ){
        this.sanphamService.getById(Id).subscribe(res => {
            this.SanPhamGetByIdData = res[0];
            
        })
    }

    createLoaiSp(){

        let body = {
            TenSanPham: this.TenSanPham,
            MaLoai: parseInt(this.MaLoai),
            Anh: this.Anh,
            Gia: parseInt(this.Gia),
            SoLuong: parseInt(this.SoLuong),
            Mota: this.Mota
        }
        
        this.sanphamService.postLoaiSp(body).subscribe(res => {
            alert("Thêm sản phẩm thành công.")
            this.closeModal();
            this.getData();
        })
        
    }

    updateLoaiSp(){
        
        let body = {
            TenSanPham : this.SanPhamGetByIdData.TenSanPham,
            MaLoai : this.SanPhamGetByIdData.MaLoai,
            Anh : this.SanPhamGetByIdData.Anh,
            SoLuong : this.SanPhamGetByIdData.SoLuong,
            Gia:this.SanPhamGetByIdData.Gia,
            Mota: this.SanPhamGetByIdData.Mota, 
        }         
        var id = this.SanPhamGetByIdData.MaSanPham;
        this.sanphamService.putLoaiSp(id, body).subscribe(res => {
            console.log(res);
            
            this.getData();
            alert("Sửa sản phẩm thành công.")     
        });  
    }

    deleteLoaiSp(Id: number){
        document.querySelector('.manager__alert')?.classList.add('active');
        document.querySelector('.manager__alert-content')?.classList.add('scale-up-center');
        this.MaSanPham = Id;
        
    }

    closePopup() {
        document.querySelector('.manager__alert')?.classList.remove('active');
        document.querySelector('.manager__alert-content')?.classList.remove('scale-up-center');
    }

    deleteConfirm(){
        this.sanphamService.deleteLoaiSp(this.MaSanPham).subscribe(res => {
            this.getData();
            this.closePopup();
        })
        alert("Xóa thành công!")
    }

    search() {
        if (!this.keyword) {
            this.sanphamService.getList().subscribe(res => {
                this.SanPhamDataApi = res;
            });
        } else {
            var data = {
                keyword: this.keyword
            }
            this.sanphamService.search(data).subscribe(res => {
                this.SanPhamDataApi = res;
            });
        }
        // console.log(this.keyword);
        // var data = {
        //     keyword: this.keyword
        // }
        // this.sanphamService.search(data).subscribe(res => {
        //     this.SanPhamDataApi = res;
        // })
    }
   
}
