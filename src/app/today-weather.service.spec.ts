import { TestBed } from '@angular/core/testing';

import { TodayWeatherService } from './today-weather.service';

describe('TodayWeatherService', () => {
  let service: TodayWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TodayWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
