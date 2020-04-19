import { TestBed } from '@angular/core/testing';

import { DaysWeatherService } from './days-weather.service';

describe('DaysWeatherService', () => {
  let service: DaysWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaysWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
