import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseEggListComponent } from './purchase-egg-list.component';

describe('PurchaseEggListComponent', () => {
  let component: PurchaseEggListComponent;
  let fixture: ComponentFixture<PurchaseEggListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseEggListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseEggListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
