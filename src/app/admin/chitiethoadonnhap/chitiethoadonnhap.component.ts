import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {HoadonnhapService} from '../service/hoadonnhap.service';

@Component({
  selector: 'app-chitiethoadonnhap',
  templateUrl: './chitiethoadonnhap.component.html',
  styleUrls: ['./chitiethoadonnhap.component.css']
})
export class ChitiethoadonnhapComponent {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private hoadonnhap: HoadonnhapService){}
  MaHoaDonNhap: any;
  Data: any;
  p: number = 1;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.MaHoaDonNhap = params['id'];
      
      this.get();
    })
  }

  get(){
    this.hoadonnhap.getById(this.MaHoaDonNhap).subscribe(data => {
      this.Data = data;
           
    })
  }
  

}
