import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NpcsComponent } from './npcs.component';

describe('NpcsComponent', () => {
  let component: NpcsComponent;
  let fixture: ComponentFixture<NpcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NpcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NpcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
