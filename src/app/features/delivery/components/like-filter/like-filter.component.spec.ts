import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikeFilterComponent } from './like-filter.component';

describe('LikeFilterComponent', () => {
  let component: LikeFilterComponent;
  let fixture: ComponentFixture<LikeFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LikeFilterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LikeFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
