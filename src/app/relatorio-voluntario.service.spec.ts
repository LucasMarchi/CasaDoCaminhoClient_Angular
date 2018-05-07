import { TestBed, inject } from '@angular/core/testing';

import { RelatorioVoluntarioService } from './relatorio-voluntario.service';

describe('RelatorioVoluntarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RelatorioVoluntarioService]
    });
  });

  it('should be created', inject([RelatorioVoluntarioService], (service: RelatorioVoluntarioService) => {
    expect(service).toBeTruthy();
  }));
});
