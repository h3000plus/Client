import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PickupRestaurantGridComponent } from './pickup-restaurant-grid.component';

describe('PickupRestaurantGridComponent', () => {
  let component: PickupRestaurantGridComponent;
  let fixture: ComponentFixture<PickupRestaurantGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PickupRestaurantGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PickupRestaurantGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
