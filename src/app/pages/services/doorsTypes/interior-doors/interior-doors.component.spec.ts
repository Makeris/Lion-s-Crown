import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InteriorDoorsComponent } from './interior-doors.component';

describe('InteriorDoorsComponent', () => {
  let component: InteriorDoorsComponent;
  let fixture: ComponentFixture<InteriorDoorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InteriorDoorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InteriorDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
