import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CreateTeamComponent } from './create-team.component';
import { Profile } from 'src/app/interfaces/profile';

describe('CreateTeamComponent', () => {
  let component: CreateTeamComponent;
  let fixture: ComponentFixture<CreateTeamComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateTeamComponent ],
      imports: [IonicModule.forRoot(), HttpClientModule, RouterTestingModule ],
      providers: [HttpClient]
    }).compileComponents();

    fixture = TestBed.createComponent(CreateTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should initialize component', () => {
    expect(component).toBeTruthy();
  });

  it('should add customer in selected profile', () => {
    var selectedProfiles : Profile = {
      email: 'test@test.com',
      name: "Test Test"
    };
    expect(component.selectProfile(selectedProfiles)).toEqual(2);
  });

  it('should add slot', () => {
    expect(component.addNewSlot()).toEqual(5);
    expect(component.addNewSlot()).toEqual(6);
  });


});
