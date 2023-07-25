import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleChickenAddComponent } from './sale-chicken-add.component';

describe('SaleChickenAddComponent', () => {
  let component: SaleChickenAddComponent;
  let fixture: ComponentFixture<SaleChickenAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleChickenAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleChickenAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
