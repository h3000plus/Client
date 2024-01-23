import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeeFilterComponent } from './fee-filter.component';

describe('FeeFilterComponent', () => {
  let component: FeeFilterComponent;
  let fixture: ComponentFixture<FeeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeeFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FeeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
