import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastyTagsComponent } from './tasty-tags.component';

describe('TastyTagsComponent', () => {
  let component: TastyTagsComponent;
  let fixture: ComponentFixture<TastyTagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TastyTagsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TastyTagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
