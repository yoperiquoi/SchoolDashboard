import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeartsComponent } from './hearts.component';

describe('HeartsComponent', () => {
  let component: HeartsComponent;
  let fixture: ComponentFixture<HeartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeartsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
