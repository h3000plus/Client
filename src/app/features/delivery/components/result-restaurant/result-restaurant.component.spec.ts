import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultRestaurantComponent } from './result-restaurant.component';

describe('ResultRestaurantComponent', () => {
  let component: ResultRestaurantComponent;
  let fixture: ComponentFixture<ResultRestaurantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResultRestaurantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultRestaurantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
