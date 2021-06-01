import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WoodProductPageComponent } from './wood-product-page.component';

describe('WoodProductPageComponent', () => {
  let component: WoodProductPageComponent;
  let fixture: ComponentFixture<WoodProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WoodProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WoodProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
