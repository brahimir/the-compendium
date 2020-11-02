import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateMonsterComponent } from './create-monster.component';

describe('CreateMonsterComponent', () => {
  let component: CreateMonsterComponent;
  let fixture: ComponentFixture<CreateMonsterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateMonsterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateMonsterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
