import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotAuthorizedPageComponent } from './not-authorized-page.component';

describe('NotAuthorizedPageComponent', () => {
  let component: NotAuthorizedPageComponent;
  let fixture: ComponentFixture<NotAuthorizedPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotAuthorizedPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotAuthorizedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
