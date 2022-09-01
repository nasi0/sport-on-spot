import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { IonicModule } from '@ionic/angular';

import { CreateLobbyComponent } from './create-lobby.component';

describe('CreateLobbyComponent', () => {
  let component: CreateLobbyComponent;
  let fixture: ComponentFixture<CreateLobbyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLobbyComponent ],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule ],
      providers: [HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateLobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
