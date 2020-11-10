import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpellDetailsDialogComponent } from './spell-details-dialog.component';

describe('SpellDetailsDialogComponent', () => {
  let component: SpellDetailsDialogComponent;
  let fixture: ComponentFixture<SpellDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpellDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpellDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
