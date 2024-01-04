import { Component, ViewEncapsulation } from '@angular/core';
import { TrangchuService } from '../../service/trangchu/trangchu.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', ],
  encapsulation: ViewEncapsulation.None
})

export class HeaderComponent {
  constructor(private trangchuService : TrangchuService, private router: Router) {}
    TrangChuLSPApi: any = [];
    ngOnInit(): void {
      this.getLoaisanpham();
      
    }
    
    getLoaisanpham(){
      this.trangchuService.getLoaisp().subscribe((res) => {
          this.TrangChuLSPApi = res;
      
        })
    }
    viewCategori(MaLoai: number ) {      
      this.router.navigate(['categori', MaLoai]);
    }
    
   
      
}
