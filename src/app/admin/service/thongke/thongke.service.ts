import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThongkeService {

    constructor(private http : HttpClient) { }

    private baseURL = `http://localhost:3000/Thongke`;

    getday(day: any) : Observable<any[]> {
        return this.http.get<any>(`${this.baseURL}/thongketheongay/${day}`);
    }
    getmonth(namMonth: any): Observable<any[]> {
        return this.http.get<any>(`${this.baseURL}/thongketheothang/${namMonth}`);
      }
}
