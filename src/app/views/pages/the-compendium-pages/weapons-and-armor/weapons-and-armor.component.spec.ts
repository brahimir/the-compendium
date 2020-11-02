import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeaponsAndArmorComponent } from './weapons-and-armor.component';

describe('WeaponsComponent', () => {
  let component: WeaponsAndArmorComponent;
  let fixture: ComponentFixture<WeaponsAndArmorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeaponsAndArmorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeaponsAndArmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
