import { TestBed } from '@angular/core/testing';

import { HostInterceptor } from './host.interceptor';

describe('HostInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HostInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HostInterceptor = TestBed.inject(HostInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
