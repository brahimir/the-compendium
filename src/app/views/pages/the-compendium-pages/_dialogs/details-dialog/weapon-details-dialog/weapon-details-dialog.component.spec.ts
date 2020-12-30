import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponDetailsDialogComponent } from './weapon-details-dialog.component';

describe('WeaponDetailsDialogComponent', () => {
  let component: WeaponDetailsDialogComponent;
  let fixture: ComponentFixture<WeaponDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
