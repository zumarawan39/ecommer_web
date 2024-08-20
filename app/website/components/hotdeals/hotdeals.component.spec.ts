import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotdealsComponent } from './hotdeals.component';

describe('HotdealsComponent', () => {
  let component: HotdealsComponent;
  let fixture: ComponentFixture<HotdealsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotdealsComponent]
    });
    fixture = TestBed.createComponent(HotdealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
