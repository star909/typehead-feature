import { TestBed } from '@angular/core/testing';

import { TypeMockService } from './type-mock.service';

describe('TypeMockService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TypeMockService = TestBed.get(TypeMockService);
    expect(service).toBeTruthy();
  });
});
