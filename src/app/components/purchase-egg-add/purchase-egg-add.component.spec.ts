import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseEggAddComponent } from './purchase-egg-add.component';

describe('PurchaseEggAddComponent', () => {
  let component: PurchaseEggAddComponent;
  let fixture: ComponentFixture<PurchaseEggAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseEggAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PurchaseEggAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
