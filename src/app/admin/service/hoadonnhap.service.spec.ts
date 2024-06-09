import { TestBed } from '@angular/core/testing';

import { HoadonnhapService } from './hoadonnhap.service';

describe('HoadonnhapService', () => {
  let service: HoadonnhapService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HoadonnhapService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
