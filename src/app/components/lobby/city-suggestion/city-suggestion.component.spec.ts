import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { CitySuggestionComponent } from './city-suggestion.component';

describe('CitySuggestionComponent', () => {
  let component: CitySuggestionComponent;
  let fixture: ComponentFixture<CitySuggestionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CitySuggestionComponent ],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule ],
      providers: [HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(CitySuggestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
