import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachHangOderDetailComponent } from './khach-hang-oder-detail.component';

describe('KhachHangOderDetailComponent', () => {
  let component: KhachHangOderDetailComponent;
  let fixture: ComponentFixture<KhachHangOderDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KhachHangOderDetailComponent]
    });
    fixture = TestBed.createComponent(KhachHangOderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
