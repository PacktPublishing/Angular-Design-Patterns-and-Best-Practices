import { TestBed } from '@angular/core/testing';

import { LoadInterceptor } from './load.interceptor';

describe('LoadInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LoadInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LoadInterceptor = TestBed.inject(LoadInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
