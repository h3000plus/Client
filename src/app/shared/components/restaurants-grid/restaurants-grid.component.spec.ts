import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantsGridComponent } from './restaurants-grid.component';

describe('RestaurantsGridComponent', () => {
  let component: RestaurantsGridComponent;
  let fixture: ComponentFixture<RestaurantsGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RestaurantsGridComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RestaurantsGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
