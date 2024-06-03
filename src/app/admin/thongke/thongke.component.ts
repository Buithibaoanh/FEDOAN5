import { Component } from '@angular/core';
import { ThongkeService } from '../service/thongke/thongke.service';
import { formatDate } from '@angular/common';


@Component({
  selector: 'app-thongke',
  templateUrl: './thongke.component.html',
  styleUrls: ['./thongke.component.css']
})
export class ThongkeComponent {

    constructor(private thongkeService : ThongkeService){}
    p: number = 1;
    day: number = 0;
    data: any ;
    totalRevenue: number = 0;
    totalQuantity: number = 0; // Thêm biến để lưu tổng số lượng sản phẩm

    Thongke(){
        console.log(this.day);
        
        this.thongkeService.getday(this.day).subscribe((res) => {
            this.data = res;

            this.totalRevenue = this.calculateTotalRevenue(this.data);

            // Calculate total quantity
            this.totalQuantity = this.calculateTotalQuantity(this.data);

        })

    }
    private calculateTotalRevenue(data: any[]): number {
        return data.reduce((total, item) => total + item.TongThanhTien, 0);
      }
    
      private calculateTotalQuantity(data: any[]): number {
        return data.reduce((total, item) => total + Number(item.TongSoLuong), 0);
      }
      formatDate(dateString: any): string {
        if (!dateString) { return ""; }
        const date = new Date(dateString);
        if (isNaN(date.getTime())) {
          return "Invalid Date";
        }
    
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        return `${day}/${month}/${year}`;
      }
}
