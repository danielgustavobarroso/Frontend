import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseChickenAddComponent } from './purchase-chicken-add.component';

describe('PurchaseChickenAddComponent', () => {
  let component: PurchaseChickenAddComponent;
  let fixture: ComponentFixture<PurchaseChickenAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseChickenAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseChickenAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
