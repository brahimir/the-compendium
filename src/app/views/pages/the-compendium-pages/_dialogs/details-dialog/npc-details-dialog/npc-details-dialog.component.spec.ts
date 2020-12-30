import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcDetailsDialogComponent } from './npc-details-dialog.component';

describe('NpcDetailsDialogComponent', () => {
  let component: NpcDetailsDialogComponent;
  let fixture: ComponentFixture<NpcDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
