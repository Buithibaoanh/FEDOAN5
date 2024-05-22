import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailKhoComponent } from './detail-kho.component';

describe('DetailKhoComponent', () => {
  let component: DetailKhoComponent;
  let fixture: ComponentFixture<DetailKhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DetailKhoComponent]
    });
    fixture = TestBed.createComponent(DetailKhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
