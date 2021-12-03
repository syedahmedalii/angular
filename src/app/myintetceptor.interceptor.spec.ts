import { TestBed } from '@angular/core/testing';

import { MyintetceptorInterceptor } from './myintetceptor.interceptor';

describe('MyintetceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MyintetceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MyintetceptorInterceptor = TestBed.inject(MyintetceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
