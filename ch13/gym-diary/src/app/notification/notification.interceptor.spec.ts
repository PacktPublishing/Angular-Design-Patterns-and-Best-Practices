import { TestBed } from '@angular/core/testing';

import { NotificationInterceptor } from './notification.interceptor';
import { ToastrService } from 'ngx-toastr';

describe('NotificationInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      providers: [
        NotificationInterceptor,
        {
          provide: ToastrService,
          useValue: jasmine.createSpyObj('ToastrService', ['success']),
        },
      ],
    })
  );

  it('should be created', () => {
    const interceptor: NotificationInterceptor = TestBed.inject(
      NotificationInterceptor
    );
    expect(interceptor).toBeTruthy();
  });
});
