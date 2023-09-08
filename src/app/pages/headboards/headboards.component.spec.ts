import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadboardsComponent } from './headboards.component';

describe('HeadboardsComponent', () => {
  let component: HeadboardsComponent;
  let fixture: ComponentFixture<HeadboardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HeadboardsComponent]
    });
    fixture = TestBed.createComponent(HeadboardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
