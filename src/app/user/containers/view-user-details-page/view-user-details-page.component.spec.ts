import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUserDetailsPageComponent } from './view-user-details-page.component';

describe('ViewUserDetailsPageComponent', () => {
  let component: ViewUserDetailsPageComponent;
  let fixture: ComponentFixture<ViewUserDetailsPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewUserDetailsPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewUserDetailsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
