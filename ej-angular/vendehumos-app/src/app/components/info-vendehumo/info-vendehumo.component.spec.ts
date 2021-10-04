import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoVendehumoComponent } from './info-vendehumo.component';

describe('InfoVendehumoComponent', () => {
  let component: InfoVendehumoComponent;
  let fixture: ComponentFixture<InfoVendehumoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoVendehumoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoVendehumoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
