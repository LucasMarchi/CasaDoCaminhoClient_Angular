import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntarioDetalheComponent } from './voluntario-detalhe.component';

describe('VoluntarioDetalheComponent', () => {
  let component: VoluntarioDetalheComponent;
  let fixture: ComponentFixture<VoluntarioDetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntarioDetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntarioDetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
