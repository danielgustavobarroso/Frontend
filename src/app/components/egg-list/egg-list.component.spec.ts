import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EggListComponent } from './egg-list.component';

describe('EggComponent', () => {
  let component: EggListComponent;
  let fixture: ComponentFixture<EggListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EggListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EggListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
