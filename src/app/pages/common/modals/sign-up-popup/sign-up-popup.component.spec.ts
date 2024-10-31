import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpPopupComponent } from './sign-up-popup.component';

describe('SignUpPopupComponent', () => {
  let component: SignUpPopupComponent;
  let fixture: ComponentFixture<SignUpPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignUpPopupComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
