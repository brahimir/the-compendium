import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonstersAndNpcsComponent } from './monsters-and-npcs.component';

describe('MonstersAndNpcsComponent', () => {
  let component: MonstersAndNpcsComponent;
  let fixture: ComponentFixture<MonstersAndNpcsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonstersAndNpcsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonstersAndNpcsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
