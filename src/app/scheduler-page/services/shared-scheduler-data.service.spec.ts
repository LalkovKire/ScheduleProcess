import { TestBed } from '@angular/core/testing';

import { SharedSchedulerDataService } from './shared-scheduler-data.service';

describe('SharedSchedulerDataService', () => {
  let service: SharedSchedulerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedSchedulerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
