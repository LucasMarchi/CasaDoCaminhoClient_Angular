import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetoVoluntariosComponent } from './projeto-voluntarios.component';

describe('ProjetoVoluntariosComponent', () => {
  let component: ProjetoVoluntariosComponent;
  let fixture: ComponentFixture<ProjetoVoluntariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetoVoluntariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetoVoluntariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
