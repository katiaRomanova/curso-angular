import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendehumoComponent } from './add-vendehumo.component';

describe('AddVendehumoComponent', () => {
  let component: AddVendehumoComponent;
  let fixture: ComponentFixture<AddVendehumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVendehumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVendehumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
