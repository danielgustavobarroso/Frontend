import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleChickenListComponent } from './sale-chicken-list.component';

describe('SaleChickenListComponent', () => {
  let component: SaleChickenListComponent;
  let fixture: ComponentFixture<SaleChickenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleChickenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleChickenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
