import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSpellComponent } from './create-spell.component';

describe('CreateSpellComponent', () => {
  let component: CreateSpellComponent;
  let fixture: ComponentFixture<CreateSpellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateSpellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
