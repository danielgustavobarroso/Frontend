import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleEggAddComponent } from './sale-egg-add.component';

describe('SaleEggAddComponent', () => {
  let component: SaleEggAddComponent;
  let fixture: ComponentFixture<SaleEggAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleEggAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleEggAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
