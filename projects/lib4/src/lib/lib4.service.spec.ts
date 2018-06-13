import { TestBed, inject } from '@angular/core/testing';

import { Lib4Service } from './lib4.service';

describe('Lib4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Lib4Service]
    });
  });

  it('should be created', inject([Lib4Service], (service: Lib4Service) => {
    expect(service).toBeTruthy();
  }));
});
