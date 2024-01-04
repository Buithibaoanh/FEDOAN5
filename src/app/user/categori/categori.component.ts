import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TrangchuService } from '../service/trangchu/trangchu.service';

@Component({
  selector: 'app-categori',
  templateUrl: './categori.component.html',
  styleUrls: ['./categori.component.css']
})
export class CategoriComponent implements OnInit {
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private trangchu: TrangchuService){}
  MaLoai: any;
  DataCategori: any;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.MaLoai = params['id'];
      
      this.get();
    })
  }

  get(){
    this.trangchu.getcategori(this.MaLoai).subscribe(dataCategori => {
      this.DataCategori = dataCategori;
           
    })
  }
  viewDetail(MaSanPham: number ) {      
    this.router.navigate(['details', MaSanPham]);
  }

}
