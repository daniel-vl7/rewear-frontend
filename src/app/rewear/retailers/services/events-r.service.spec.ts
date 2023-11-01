import { TestBed } from '@angular/core/testing';

import { EventsRService } from './events-r.service';

describe('EventsRService', () => {
  let service: EventsRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventsRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
