/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ProponentsService } from './service';

describe('Service: Proponents', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ProponentsService]
    });
  });

  it('should ...', inject([ProponentsService], (service: ProponentsService) => {
    expect(service).toBeTruthy();
  }));
});
