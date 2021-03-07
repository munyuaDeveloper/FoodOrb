import { TestBed } from '@angular/core/testing';

import { FoodOrbService } from './food-orb.service';

describe('FoodOrbService', () => {
  let service: FoodOrbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodOrbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
