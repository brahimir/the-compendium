import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebrewWeaponsComponent } from './homebrew-weapons.component';

describe('HomebrewWeaponsComponent', () => {
  let component: HomebrewWeaponsComponent;
  let fixture: ComponentFixture<HomebrewWeaponsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebrewWeaponsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebrewWeaponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
