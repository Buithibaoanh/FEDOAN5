import { DecimalPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { KhoService } from '../service/kho.service';

@Component({
  selector: 'app-detail-kho',
  templateUrl: './detail-kho.component.html',
  styleUrls: ['./detail-kho.component.css']
})
export class DetailKhoComponent implements OnInit {
  constructor(private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private khoService : KhoService){}

  MaKho: any;
  Data: any;
  cartItems: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.MaKho = params['id'];
      
      this.get();
    })
  }

  get(){
    this.khoService.getById(this.MaKho).subscribe(data => {
      this.Data = data;   
    })
  }
}
