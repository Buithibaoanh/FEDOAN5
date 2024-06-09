import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachHangOderComponent } from './khach-hang-oder.component';

describe('KhachHangOderComponent', () => {
  let component: KhachHangOderComponent;
  let fixture: ComponentFixture<KhachHangOderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KhachHangOderComponent]
    });
    fixture = TestBed.createComponent(KhachHangOderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
