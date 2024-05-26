import { Component, OnInit } from '@angular/core';
import { LoaisanphamService } from '../service/loaisanpham/loaisanpham.service';

@Component({
  selector: 'app-loaisanpham',
  templateUrl: './loaisanpham.component.html',
  styleUrls: ['./loaisanpham.component.css']
})
export class LoaisanphamComponent implements OnInit {
    constructor(private loaisanphamService : LoaisanphamService) {}
    LoaiSanPhamDataApi: any = [];
    modalType: 'create' | 'update' = 'create';
    TenLoai: any;
    LoaiSanPhamGetByIdData: any = [];
    keyword: any;
    p: number = 1;
    ngOnInit(): void {
        this.getData();
    }

    getData(){
        this.loaisanphamService.getList().subscribe((res) => {
            this.LoaiSanPhamDataApi = res;
        
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
            this.createLoaiSp();
        } else {
            // Thực hiện xử lý cập nhật
            this.updateLoaiSp();
        }
        // Đóng modal sau khi tạo mới hoặc cập nhật
        this.closeModal();
    }

    getById(Id: number ){
        this.loaisanphamService.getById(Id).subscribe(res => {
            this.LoaiSanPhamGetByIdData = res[0];
            
        })
    }

    createLoaiSp(){

        let body = {
            TenLoai: this.TenLoai
        }

        this.loaisanphamService.postLoaiSp(body).subscribe(res => {
            this.closeModal();
            this.getData();
        })
        
    }

    updateLoaiSp(){
        let body = {
            TenLoai : this.LoaiSanPhamGetByIdData.TenLoai
        } 
        var id = this.LoaiSanPhamGetByIdData.MaLoai;
        console.log(id);
        
        this.loaisanphamService.putLoaiSp(id, body).subscribe(res => {
            this.getData();
        });       
    }

    deleteLoaiSp(Id: number){
        this.loaisanphamService.deleteLoaiSp(Id).subscribe(res => {
            this.getData();
            
        })
    }
    search() {
        if (!this.keyword) {
            this.loaisanphamService.getList().subscribe(res => {
                this.LoaiSanPhamDataApi = res;
            });
        } else {
            var data = {
                keyword: this.keyword
            }
            this.loaisanphamService.search(data).subscribe(res => {
                this.LoaiSanPhamDataApi = res;
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
