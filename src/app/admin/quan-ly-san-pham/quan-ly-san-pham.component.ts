import { Component, ElementRef, ViewChild } from '@angular/core';
import { SanphamService } from '../service/sanpham/sanpham.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-quan-ly-san-pham',
  templateUrl: './quan-ly-san-pham.component.html',
  styleUrls: ['./quan-ly-san-pham.component.css']
})
export class QuanLySanPhamComponent {
  constructor(private sanphamService : SanphamService) {}
    SanPhamDataApi: any = [];
    modalType: 'create' | 'update' = 'create';
    MaLoai:number=0;
    TenLoai:string = '';
    TenSanPham:string = '';
    Anh:string = '';
    SoLuong:number = 0;
    Mota:string = '';
    SanPhamGetByIdData: any = [];
    @ViewChild('pdfContent') pdfContent!: ElementRef;
    
    p: number = 1;
    
    ngOnInit(): void {
        this.getData();
    }
    

    getData() {
        this.sanphamService.getList().subscribe((res) => {
          // Gọi hàm để tạo PDF khi dữ liệu đã được nhận
          this.generatePDF(res);
        });
      }
    
      generatePDF(data: any) {
        const doc = new jsPDF();
        
        // Format dữ liệu để hiển thị trong PDF
        let pdfContent = '';
        data.forEach((item: any, index: number) => {
          pdfContent += `Item ${index + 1}: ${JSON.stringify(item)}\n`;
        });
    
        // Thêm nội dung vào PDF và lưu
        doc.text(pdfContent, 10, 10);
        doc.save('data.pdf');
      }
      genPDF() {
        const htmlContent = this.pdfContent.nativeElement.innerHTML;
        this.sanphamService.generatePDF(htmlContent, 'file.pdf');
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
            MaLoai: this.MaLoai,
            TenLoai: this.TenLoai,
            Anh: this.Anh,
            SoLuong: this.SoLuong,
            Mota: this.Mota

        }
        console.log(body);
        alert("Thêm sản phẩm thành công.")

        this.sanphamService.postLoaiSp(body).subscribe(res => {
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
            Mota: this.SanPhamGetByIdData.Mota, 
        } 
        var id = this.SanPhamGetByIdData.MaSanPham;
        
        this.sanphamService.putLoaiSp(id, body).subscribe(res => {
            this.getData();
        });  
        alert("Sửa sản phẩm thành công.")     
    }

    deleteLoaiSp(Id: number){
        this.sanphamService.deleteLoaiSp(Id).subscribe(res => {
            this.getData();
            
        })
        alert("Bạn có muốn xóa sản phẩm không?.")
    }
   
}
