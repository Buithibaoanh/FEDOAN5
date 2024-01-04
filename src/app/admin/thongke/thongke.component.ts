import { Component } from '@angular/core';
import { ThongkeService } from '../service/thongke/thongke.service';

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
}
