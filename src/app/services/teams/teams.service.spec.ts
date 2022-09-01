import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { TeamsService } from './teams.service';

describe('TeamsService', () => {
  let service: TeamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(TeamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
