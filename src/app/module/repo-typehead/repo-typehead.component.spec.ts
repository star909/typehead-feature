import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoTypeheadComponent } from './repo-typehead.component';

describe('RepoTypeheadComponent', () => {
  let component: RepoTypeheadComponent;
  let fixture: ComponentFixture<RepoTypeheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoTypeheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoTypeheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
