import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsProductsComponent } from '../components/details-products.component';

describe('DetailsProductsComponent', () => {
  let component: DetailsProductsComponent;
  let fixture: ComponentFixture<DetailsProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsProductsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
