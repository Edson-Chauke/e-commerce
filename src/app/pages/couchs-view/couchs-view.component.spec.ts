import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CouchsViewComponent } from './couchs-view.component';

describe('CouchsViewComponent', () => {
  let component: CouchsViewComponent;
  let fixture: ComponentFixture<CouchsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CouchsViewComponent]
    });
    fixture = TestBed.createComponent(CouchsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
