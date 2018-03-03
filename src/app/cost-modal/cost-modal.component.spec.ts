import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CostModalComponent } from './cost-modal.component';

describe('CostModalComponent', () => {
  let component: CostModalComponent;
  let fixture: ComponentFixture<CostModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
