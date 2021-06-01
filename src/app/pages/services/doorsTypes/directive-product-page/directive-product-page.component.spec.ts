import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectiveProductPageComponent } from './directive-product-page.component';

describe('DirectiveProductPageComponent', () => {
  let component: DirectiveProductPageComponent;
  let fixture: ComponentFixture<DirectiveProductPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectiveProductPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DirectiveProductPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
