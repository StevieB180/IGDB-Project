import { TestBed } from '@angular/core/testing';

import { IgdbService } from './igdb.service';

describe('IgdbService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IgdbService = TestBed.get(IgdbService);
    expect(service).toBeTruthy();
  });
});
