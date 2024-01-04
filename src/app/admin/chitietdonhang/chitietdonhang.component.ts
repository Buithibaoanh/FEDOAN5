import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {DonhangService} from '../service/donhang/donhang.service';
import { DecimalPipe } from '@angular/common';

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

}
