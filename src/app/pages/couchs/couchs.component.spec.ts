import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchsComponent } from './couchs.component';

describe('CouchsComponent', () => {
  let component: CouchsComponent;
  let fixture: ComponentFixture<CouchsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouchsComponent]
    });
    fixture = TestBed.createComponent(CouchsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
