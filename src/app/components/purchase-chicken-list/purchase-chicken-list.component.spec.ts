import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseChickenListComponent } from './purchase-chicken-list.component';

describe('PurchaseChickenListComponent', () => {
  let component: PurchaseChickenListComponent;
  let fixture: ComponentFixture<PurchaseChickenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseChickenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseChickenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
