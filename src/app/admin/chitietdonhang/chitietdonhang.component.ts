import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DonhangService} from '../service/donhang/donhang.service';
import { DecimalPipe } from '@angular/common';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-chitietdonhang',
  templateUrl: './chitietdonhang.component.html',
  styleUrls: ['./chitietdonhang.component.css']
})
export class ChitietdonhangComponent implements OnInit{
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private donhang: DonhangService){}
  MaDonHang: any;
  Data: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.MaDonHang = params['id'];
      
      this.get();
    })
  }

  get(){
    this.donhang.getById(this.MaDonHang).subscribe(data => {
      this.Data = data;
           
    })
  }
  tinhTongSoLuong(): number {
    return this.Data.reduce((tong: number, item: any) => tong + item.SoLuong, 0);
  }
  tinhTongGiaTriDonHang(): number {
    return this.Data.reduce((tong: number, item: any) => tong + (item.SoLuong * item.GiaBan), 0);
  }
  
  downloadPDF(): void {
    const DATA = document.getElementById('inpdf');
    if (DATA) {
      html2canvas(DATA).then(canvas => {
        const imgWidth = 208;
        const imgHeight = canvas.height * imgWidth / canvas.width;
        const contentDataURL = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        const position = 0;
        pdf.addImage(contentDataURL, 'PNG', 0, position, imgWidth, imgHeight);

        // Lấy thời gian hiện tại và định dạng thành chuỗi
        const now = new Date();
        const formattedDate = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}_${now.getHours()}-${now.getMinutes()}-${now.getSeconds()}`;
        const fileName = `invoice_${formattedDate}.pdf`;

        pdf.save(fileName);
      });
    }
    
  }

}
