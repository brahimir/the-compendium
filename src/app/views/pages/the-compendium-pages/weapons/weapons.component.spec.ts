import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Weapons } from './weapons.component';

describe('WeaponsComponent', () => {
  let component: Weapons;
  let fixture: ComponentFixture<Weapons>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Weapons ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Weapons);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
