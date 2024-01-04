import { Component } from '@angular/core';
import { TrangchuService } from '../service/trangchu/trangchu.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent {
  constructor(private trangchuService : TrangchuService, private router: Router) {}
    TrangChuDataApi: any = [];
    sl: number = 8;
    TrangChuGetByIdData: any = [];
    TrangChuLSPApi: any = [];
    TrangChuGetspmvData:any = [];
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
    
    
   
}
