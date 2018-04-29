import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoDoadoresComponent } from './projeto-doadores.component';

describe('ProjetoDoadoresComponent', () => {
  let component: ProjetoDoadoresComponent;
  let fixture: ComponentFixture<ProjetoDoadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoDoadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoDoadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
