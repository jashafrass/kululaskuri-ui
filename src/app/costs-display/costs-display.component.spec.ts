import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostsDisplayComponent } from './costs-display.component';

describe('CostsDisplayComponent', () => {
  let component: CostsDisplayComponent;
  let fixture: ComponentFixture<CostsDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostsDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostsDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
