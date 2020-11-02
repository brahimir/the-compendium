import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebrewArmorComponent } from './homebrew-armor.component';

describe('HomebrewArmorComponent', () => {
  let component: HomebrewArmorComponent;
  let fixture: ComponentFixture<HomebrewArmorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebrewArmorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebrewArmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
