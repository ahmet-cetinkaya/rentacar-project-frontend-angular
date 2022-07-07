import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithGoogleComponent } from './login-with-google.component';

describe('LoginWithGoogleComponent', () => {
  let component: LoginWithGoogleComponent;
  let fixture: ComponentFixture<LoginWithGoogleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithGoogleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithGoogleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
