import { TestBed } from '@angular/core/testing';

import { FaService } from './fa.service';

describe('FaService', () => {
  let service: FaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
