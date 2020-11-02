import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebrewSpellsComponent } from './homebrew-spells.component';

describe('HomebrewSpellsComponent', () => {
  let component: HomebrewSpellsComponent;
  let fixture: ComponentFixture<HomebrewSpellsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebrewSpellsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebrewSpellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
