import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotfoundSnackbarComponent } from './notfound-snackbar.component';

describe('NotfoundSnackbarComponent', () => {
  let component: NotfoundSnackbarComponent;
  let fixture: ComponentFixture<NotfoundSnackbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotfoundSnackbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotfoundSnackbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
