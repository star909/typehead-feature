import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserTypeheadComponent } from './user-typehead.component';

describe('UserTypeheadComponent', () => {
  let component: UserTypeheadComponent;
  let fixture: ComponentFixture<UserTypeheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserTypeheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserTypeheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
