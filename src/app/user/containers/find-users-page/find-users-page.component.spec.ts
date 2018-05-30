import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindUsersPageComponent } from './find-users-page.component';

describe('FindUsersPageComponent', () => {
  let component: FindUsersPageComponent;
  let fixture: ComponentFixture<FindUsersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindUsersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindUsersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
