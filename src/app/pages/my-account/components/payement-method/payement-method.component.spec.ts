import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PayementMethodComponent } from './payement-method.component';

describe('PayementMethodComponent', () => {
  let component: PayementMethodComponent;
  let fixture: ComponentFixture<PayementMethodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PayementMethodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PayementMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
