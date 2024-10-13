import { TestBed } from '@angular/core/testing';

import { ChessGameServiceService } from './chess-game-service.service';

describe('ChessGameServiceService', () => {
  let service: ChessGameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChessGameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
