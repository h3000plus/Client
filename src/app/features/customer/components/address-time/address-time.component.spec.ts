import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddressTimeComponent } from './address-time.component';

describe('AddressTimeComponent', () => {
  let component: AddressTimeComponent;
  let fixture: ComponentFixture<AddressTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddressTimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddressTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
