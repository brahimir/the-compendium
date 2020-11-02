import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebrewNpcsComponent } from './homebrew-npcs.component';

describe('HomebrewNpcsComponent', () => {
  let component: HomebrewNpcsComponent;
  let fixture: ComponentFixture<HomebrewNpcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebrewNpcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebrewNpcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
