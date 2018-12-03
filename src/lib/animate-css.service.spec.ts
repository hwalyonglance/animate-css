import { TestBed, inject } from '@angular/core/testing';

import { AnimateCssService } from './animate-css.service';

describe('AnimateCssService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AnimateCssService]
    });
  });

  it('should be created', inject([AnimateCssService], (service: AnimateCssService) => {
    expect(service).toBeTruthy();
  }));
});
