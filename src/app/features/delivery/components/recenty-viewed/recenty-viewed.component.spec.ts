import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentyViewedComponent } from './recenty-viewed.component';

describe('RecentyViewedComponent', () => {
  let component: RecentyViewedComponent;
  let fixture: ComponentFixture<RecentyViewedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecentyViewedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecentyViewedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
