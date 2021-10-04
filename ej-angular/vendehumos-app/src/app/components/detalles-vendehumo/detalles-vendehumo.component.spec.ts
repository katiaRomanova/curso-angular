import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesVendehumoComponent } from './detalles-vendehumo.component';

describe('DetallesVendehumoComponent', () => {
  let component: DetallesVendehumoComponent;
  let fixture: ComponentFixture<DetallesVendehumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesVendehumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesVendehumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
