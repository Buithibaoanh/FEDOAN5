import { Component } from '@angular/core';
import { TrangchuService } from '../service/trangchu/trangchu.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent {
  data = Array.from({length: 100}, (_, k) => `Item ${k + 1}`);
  p: number = 1;
  constructor(private trangchuService : TrangchuService, private router: Router) {}
    TrangChuDataApi: any = [];
    sl: number = 1000;
    TrangChuGetByIdData: any = [];
    TrangChuLSPApi: any = [];
    TrangChuGetspmvData:any = [];
    keyword: any;

    
    ngOnInit(): void {
        this.getData(this.sl);
        this.getspmv(this.sl);
    }

    getData(sl: number){
        this.trangchuService.getList(sl).subscribe((res) => {
            this.TrangChuDataApi = res;
        
        })
    }
    
   
    getspmv(sl: number ){
      this.trangchuService.getspmv(sl).subscribe(res => {
          this.TrangChuGetspmvData = res;                
        })
    }

    viewDetail(MaSanPham: number ) {      
      this.router.navigate(['details', MaSanPham]);
    }
    search(sl: number) {
      if (!this.keyword) {
          this.trangchuService.getList(sl).subscribe(res => {
              this.TrangChuDataApi = res;
          });
      } else {
          var data = {
              keyword: this.keyword
          }
          this.trangchuService.search(data).subscribe(res => {
              this.TrangChuDataApi = res;
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
