import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSubComponent } from './admin-sub.component';

describe('AdminSubComponent', () => {
  let component: AdminSubComponent;
  let fixture: ComponentFixture<AdminSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
