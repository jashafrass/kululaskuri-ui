import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostAddItemComponent } from './cost-add-item.component';

describe('CostAddItemComponent', () => {
  let component: CostAddItemComponent;
  let fixture: ComponentFixture<CostAddItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostAddItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostAddItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
