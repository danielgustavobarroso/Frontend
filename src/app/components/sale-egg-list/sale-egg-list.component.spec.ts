import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleEggListComponent } from './sale-egg-list.component';

describe('SaleEggListComponent', () => {
  let component: SaleEggListComponent;
  let fixture: ComponentFixture<SaleEggListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleEggListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaleEggListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
