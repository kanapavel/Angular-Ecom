import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BestSellComponent } from './best-sell.component';

describe('BestSellComponent', () => {
  let component: BestSellComponent;
  let fixture: ComponentFixture<BestSellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BestSellComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BestSellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
