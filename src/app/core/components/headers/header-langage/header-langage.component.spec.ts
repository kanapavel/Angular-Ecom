import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderLangageComponent } from './header-langage.component';

describe('HeaderLangageComponent', () => {
  let component: HeaderLangageComponent;
  let fixture: ComponentFixture<HeaderLangageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderLangageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderLangageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
