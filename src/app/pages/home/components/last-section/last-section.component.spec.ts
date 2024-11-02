import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastSectionComponent } from './last-section.component';

describe('LastSectionComponent', () => {
  let component: LastSectionComponent;
  let fixture: ComponentFixture<LastSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LastSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
