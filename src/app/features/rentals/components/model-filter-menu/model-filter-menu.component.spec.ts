import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ModelFilterMenuComponent } from './model-filter-menu.component';

describe('ModelFilterMenuComponent', () => {
  let component: ModelFilterMenuComponent;
  let fixture: ComponentFixture<ModelFilterMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ModelFilterMenuComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModelFilterMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
