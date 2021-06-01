import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntraceDoorsComponent } from './entrace-doors.component';

describe('EntraceDoorsComponent', () => {
  let component: EntraceDoorsComponent;
  let fixture: ComponentFixture<EntraceDoorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntraceDoorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntraceDoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
