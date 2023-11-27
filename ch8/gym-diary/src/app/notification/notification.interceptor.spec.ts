import { TestBed } from '@angular/core/testing';

import { NotificationInterceptor } from './notification.interceptor';

describe('NotificationInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      NotificationInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: NotificationInterceptor = TestBed.inject(NotificationInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
