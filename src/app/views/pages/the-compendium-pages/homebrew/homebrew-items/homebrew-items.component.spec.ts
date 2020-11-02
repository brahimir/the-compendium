import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomebrewItemsComponent } from './homebrew-items.component';

describe('HomebrewItemsComponent', () => {
  let component: HomebrewItemsComponent;
  let fixture: ComponentFixture<HomebrewItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomebrewItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomebrewItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
