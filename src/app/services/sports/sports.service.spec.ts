import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { SportsService } from './sports.service';

describe('SportsService', () => {
  let service: SportsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(SportsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
