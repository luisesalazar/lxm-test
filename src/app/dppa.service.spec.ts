import { TestBed } from '@angular/core/testing';

import { DppaService } from './dppa.service';

describe('DppaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DppaService = TestBed.get(DppaService);
    expect(service).toBeTruthy();
  });
});
