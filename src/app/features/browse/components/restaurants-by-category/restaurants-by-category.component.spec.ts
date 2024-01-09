import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsByCategoryComponent } from './restaurants-by-category.component';

describe('RestaurantsByCategoryComponent', () => {
  let component: RestaurantsByCategoryComponent;
  let fixture: ComponentFixture<RestaurantsByCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantsByCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantsByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
