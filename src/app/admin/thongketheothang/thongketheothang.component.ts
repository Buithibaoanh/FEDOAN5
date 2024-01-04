import { Component } from '@angular/core';
import { ThongkeService } from '../service/thongke/thongke.service';

@Component({
  selector: 'app-thongketheothang',
  templateUrl: './thongketheothang.component.html',
  styleUrls: ['./thongketheothang.component.css']
})
export class ThongketheothangComponent {
  constructor(private thongkeService: ThongkeService) {}
  p: number = 1;
  nam: number = 0;
  month: number = 0;
  data: any;
  totalRevenue: number = 0;
  totalQuantity: number = 0; // Thêm biến để lưu tổng số lượng sản phẩm

  Thongkemonth() {
    const paddedMonth = this.padWithZero(this.month);
    const namMonth = `${this.nam}-${paddedMonth}`;

    console.log(namMonth);

    this.thongkeService.getmonth(namMonth).subscribe((res) => {
      this.data = res;

      // Calculate total revenue
      this.totalRevenue = this.calculateTotalRevenue(this.data);

      // Calculate total quantity
      this.totalQuantity = this.calculateTotalQuantity(this.data);
    });
  }

  private padWithZero(value: number): string {
    return value < 10 ? `0${value}` : `${value}`;
  }

  private calculateTotalRevenue(data: any[]): number {
    return data.reduce((total, item) => total + item.ThanhTien, 0);
  }

  private calculateTotalQuantity(data: any[]): number {
    return data.reduce((total, item) => total + item.SoLuong, 0);
  }
}