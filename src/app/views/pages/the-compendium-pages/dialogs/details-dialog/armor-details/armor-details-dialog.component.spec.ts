import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArmorDetailsDialogComponent } from './armor-details-dialog.component';

describe('ArmorDetailsDialogComponent', () => {
  let component: ArmorDetailsDialogComponent;
  let fixture: ComponentFixture<ArmorDetailsDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArmorDetailsDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArmorDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
