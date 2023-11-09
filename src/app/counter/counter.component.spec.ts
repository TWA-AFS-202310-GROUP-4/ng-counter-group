import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterComponent } from './counter.component';

describe('CounterComponent', () => {
  let component: CounterComponent;
  let fixture: ComponentFixture<CounterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterComponent]
    });
    fixture = TestBed.createComponent(CounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should increase number when call onIncreaseButtonClick', () => {
    component.number = 2;

    component.onIncreaseButtonClick();

    expect(component.number).toEqual(3);
  });

  it('should decrease number when call onDecreaseButtonClick', () => {
    component.number = 2;

    component.onDecreaseButtonClick();

    expect(component.number).toEqual(1);
  });

  it('should reset number when call onReset', () => {
    component.number = 2;

    component.onReset();

    expect(component.number).toEqual(0);
  })
});
