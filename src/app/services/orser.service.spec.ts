import { TestBed } from '@angular/core/testing';

import { OrserService } from './orser.service';

describe('OrserService', () => {
  let service: OrserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
