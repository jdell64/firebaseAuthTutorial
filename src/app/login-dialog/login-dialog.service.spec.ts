import { TestBed, inject } from '@angular/core/testing';

import { LoginDialogService } from './login-dialog.service';

describe('LoginDialogService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LoginDialogService]
    });
  });

  it('should ...', inject([LoginDialogService], (service: LoginDialogService) => {
    expect(service).toBeTruthy();
  }));
});
