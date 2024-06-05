import { TestBed } from '@angular/core/testing';

import { IngestionService } from './ingestion.service';

describe('IngestionService', () => {
  let service: IngestionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IngestionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
