import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWithMicrosoftComponent } from './login-with-microsoft.component';

describe('LoginWithMicrosoftComponent', () => {
  let component: LoginWithMicrosoftComponent;
  let fixture: ComponentFixture<LoginWithMicrosoftComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWithMicrosoftComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWithMicrosoftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
