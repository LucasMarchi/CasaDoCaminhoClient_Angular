import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoluntarioCadastroComponent } from './voluntario-cadastro.component';

describe('VoluntarioCadastroComponent', () => {
  let component: VoluntarioCadastroComponent;
  let fixture: ComponentFixture<VoluntarioCadastroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoluntarioCadastroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoluntarioCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
