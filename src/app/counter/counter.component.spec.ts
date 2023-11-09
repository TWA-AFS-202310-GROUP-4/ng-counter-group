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

  it("should increase numberValue when call increase method", () => {
    component.numberValue = 1;
    component.onIncrease();
    expect(component.numberValue).toEqual(2);
  });

  it("should increase numberValue when call decrease method", () => {
    component.numberValue = 1;
    component.onDecrease();
    expect(component.numberValue).toEqual(0);
  });
});
