import { TestBed } from '@angular/core/testing';

import { BlogItemsService } from './blog-items.service';

describe('BlogItemsService', () => {
  let service: BlogItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
