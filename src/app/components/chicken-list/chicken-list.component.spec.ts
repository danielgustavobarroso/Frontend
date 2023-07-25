import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChickenListComponent } from './chicken-list.component';

describe('ChickenListComponent', () => {
  let component: ChickenListComponent;
  let fixture: ComponentFixture<ChickenListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChickenListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChickenListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
