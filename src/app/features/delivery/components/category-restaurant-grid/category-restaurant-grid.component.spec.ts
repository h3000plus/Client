import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRestaurantGridComponent } from './category-restaurant-grid.component';

describe('CategoryRestaurantGridComponent', () => {
  let component: CategoryRestaurantGridComponent;
  let fixture: ComponentFixture<CategoryRestaurantGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CategoryRestaurantGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CategoryRestaurantGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
