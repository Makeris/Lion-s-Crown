import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodProductsComponent } from './wood-products.component';

describe('WoodProductsComponent', () => {
  let component: WoodProductsComponent;
  let fixture: ComponentFixture<WoodProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
