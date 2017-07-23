import { TestBed, inject } from '@angular/core/testing';
import { HttpModule } from '@angular/http';

import { HeroSearchService } from './hero-search.service';

describe('HeroSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpModule],
      providers: [HeroSearchService]
    });
  });

  it('should be created', inject([HeroSearchService], (service: HeroSearchService) => {
    expect(service).toBeTruthy();
  }));
});
