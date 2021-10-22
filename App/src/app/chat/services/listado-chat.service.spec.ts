import { TestBed } from '@angular/core/testing';

import { ListadoChatService } from './listado-chat.service';

describe('ListadoChatService', () => {
  let service: ListadoChatService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListadoChatService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
