import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainAccountComponent } from './main-account.component';

describe('MainAccountComponent', () => {
  let component: MainAccountComponent;
  let fixture: ComponentFixture<MainAccountComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainAccountComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainAccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
