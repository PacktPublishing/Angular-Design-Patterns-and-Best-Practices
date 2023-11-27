import { TestBed } from '@angular/core/testing';

import { TelemetryInterceptor } from './telemetry.interceptor';

describe('TelemetryInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      TelemetryInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: TelemetryInterceptor = TestBed.inject(TelemetryInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
