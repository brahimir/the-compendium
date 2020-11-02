import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateArmorComponent } from './create-armor.component';

describe('CreateArmorComponent', () => {
  let component: CreateArmorComponent;
  let fixture: ComponentFixture<CreateArmorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateArmorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateArmorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
