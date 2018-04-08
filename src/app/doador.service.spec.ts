import { TestBed, inject } from '@angular/core/testing';

import { DoadorService } from './doador.service';

describe('DoadorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DoadorService]
    });
  });

  it('should be created', inject([DoadorService], (service: DoadorService) => {
    expect(service).toBeTruthy();
  }));
});
