import { Component, OnInit } from '@angular/core';
import { TrangchuService } from '../service/trangchuadmin/trangchu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent implements OnInit{
  [x: string]: any;
  orders: any;
  ordersStatus0: any;
  ordersStatus2: any;
  orderSummary:any;
  todayOrders:any;
  DonHangGetByIdData:any = [];
  startDate: string = ''; // Khởi tạo giá trị rỗng
  endDate: string = ''; // Khởi tạo giá trị rỗng
  orders_TK: any = null; // Khởi tạo giá trị là null
  totalRevenue: number = 0;
  p: number = 1;
  constructor(private orderService: TrangchuService, private router : Router) {}
  // onPageChange(event: number): void {
  //   this.currentPage = event;
  // }
  ngOnInit() {
    this.orderService.getOrders().subscribe(data => {
      this.orders = data;
    });
    this.orderService.getOrdersStatus0().subscribe(data => {
      this.ordersStatus0 = data;
    }, error => {
      console.error('Error fetching orders with status 0', error);
    });
    this.orderService.getOrdersStatus2().subscribe(
      data => {
        this.ordersStatus2 = data;
      },
      error => {
        console.error('Error fetching orders with status 2', error);
      }
    );
    this.orderService.getOrderSummary().subscribe(
      data => {
        this.orderSummary = data;
      },
      error => {
        console.error('Error fetching order summary', error);
      }
    );
    this.orderService.getTodayOrders().subscribe(
      data => {
        this.todayOrders = data;
      },
      error => {
        
      }
    );
    
  }
  getTodayOrders() {
    this.orderService.getTodayOrders().subscribe(
      data => {
        this.todayOrders = data;
      },
      error => {
        console.error('Error fetching today\'s orders', error);
      }
    );
  }
  getByIdDonHang(Id: number )
    {
      this.orderService.getBydonhangId(Id).subscribe(res => {
          this.DonHangGetByIdData = res[0];
          
      })
    }
    viewChitietDH(MaDonHang: number ) {       
      this.router.navigate(['/admin/chitietdonhang', MaDonHang]);
    }
  viewOrderDetails(orderId: number) {
    // Gọi phương thức để lấy chi tiết đơn hàng dựa trên orderId
    this.orderService.getOrderDetails(orderId).subscribe(
      data => {
        // Xử lý dữ liệu trả về để hiển thị chi tiết đơn hàng
        console.log('Order details:', data);
      },
      error => {
        console.error('Error fetching order details', error);
      }
    );
  }
  getThongKe() {
    if (this.startDate && this.endDate) {
      let data = {
        startDate: this.startDate,
        endDate: this.endDate
      };
      this.orderService.getOrdersthongke(data).subscribe(
        (data: any) => {
          this.orders_TK = data;
          
          // Tính tổng doanh thu
          this.totalRevenue = this.calculateTotalRevenue(this.orders_TK);

        },
        (error: any) => {
          console.error('Error fetching orders', error);
        }
      );
    } else {
      console.error('Start date and end date are required');
    }
  }
  
  private calculateTotalRevenue(data: any[]): number {
    return data.reduce((total, item) => total + item.TongThanhTien, 0);
  }
  
}
  


