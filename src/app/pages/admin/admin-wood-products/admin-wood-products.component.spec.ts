import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminWoodProductsComponent } from './admin-wood-products.component';

describe('AdminWoodProductsComponent', () => {
  let component: AdminWoodProductsComponent;
  let fixture: ComponentFixture<AdminWoodProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminWoodProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminWoodProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
