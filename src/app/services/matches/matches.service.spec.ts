import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { MatchService } from './matches.service';

describe('MatchesService', () => {
  let service: MatchService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(MatchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
