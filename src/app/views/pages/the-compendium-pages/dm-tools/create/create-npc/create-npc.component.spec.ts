import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNpcComponent } from './create-npc.component';

describe('CreateNpcComponent', () => {
  let component: CreateNpcComponent;
  let fixture: ComponentFixture<CreateNpcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNpcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNpcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
