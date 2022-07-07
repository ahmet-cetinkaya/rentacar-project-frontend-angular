import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftLoginButtonComponent } from './microsoft-login-button.component';

describe('MicrosoftLoginButtonComponent', () => {
  let component: MicrosoftLoginButtonComponent;
  let fixture: ComponentFixture<MicrosoftLoginButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrosoftLoginButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosoftLoginButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
