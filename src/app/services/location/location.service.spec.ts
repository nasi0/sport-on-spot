import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { LocationService } from './location.service';

describe('LocationService', () => {
	let service: LocationService;

	beforeEach(() => {
		TestBed.configureTestingModule({
			imports: [ HttpClientModule],
			providers: [HttpClient]
		  });
		service = TestBed.inject(LocationService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
