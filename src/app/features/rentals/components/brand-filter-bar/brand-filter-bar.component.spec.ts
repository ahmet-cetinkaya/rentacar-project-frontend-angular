import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrandFilterBarComponent } from './brand-filter-bar.component';

describe('BrandFilterBarComponent', () => {
  let component: BrandFilterBarComponent;
  let fixture: ComponentFixture<BrandFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandFilterBarComponent]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
