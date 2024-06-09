import { Component } from '@angular/core';
import { TrangchuService } from '../service/trangchu/trangchu.service';
import { Router } from '@angular/router';
import { ShareDataService } from '../service/share-data.service';
@Component({
  selector: 'app-trangchu',
  templateUrl: './trangchu.component.html',
  styleUrls: ['./trangchu.component.css']
})
export class TrangchuComponent {
  data = Array.from({length: 100}, (_, k) => `Item ${k + 1}`);
  p: number = 1;
  constructor(private trangchuService : TrangchuService, private router: Router, private sharedService: ShareDataService) {}
    TrangChuDataApi: any = [];
    sl: number = 1000;
    TrangChuGetByIdData: any = [];
    TrangChuLSPApi: any = [];
    TrangChuGetspmvData:any = [];
    keyword: any;

    
    ngOnInit(): void {
        this.getData(this.sl);
        this.getspmv(this.sl);
        this.sharedService.data$.subscribe(data => {
          console.log(data);
          this.TrangChuGetspmvData = data;  
          this.TrangChuDataApi = [];              
        });
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
    
   
