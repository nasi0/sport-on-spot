import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { UrlSerializer } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { HomepageComponent } from './homepage.component';

describe('HomepageComponent', () => {
	let component: HomepageComponent;
	let fixture: ComponentFixture<HomepageComponent>;

	beforeEach(waitForAsync(() => {
		TestBed.configureTestingModule({
			declarations: [HomepageComponent],
			imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule ],
			providers: [HttpClient]
		}).compileComponents();

		fixture = TestBed.createComponent(HomepageComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	}));

	it('should create', () => {
		expect(component).toBeTruthy();
	});

});
