import { TestBed, inject } from '@angular/core/testing';

import { BeneficiariosService } from './beneficiarios.service';

describe('BeneficiariosService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeneficiariosService]
    });
  });

  it('should be created', inject([BeneficiariosService], (service: BeneficiariosService) => {
    expect(service).toBeTruthy();
  }));
});
