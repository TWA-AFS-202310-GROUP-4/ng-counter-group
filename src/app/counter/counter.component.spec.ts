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

  it('should increase the number when call the Onincrease method',() => {

    component.number = 2

    component.onIncrease()

    expect(component.number).toEqual(3)
  });

  it('should increase the number when call the Ondecrease method',() => {

    component.number = 2

    component.ondecrease()

    expect(component.number).toEqual(1)
  });

  it('should reset number = 0 when call the reset method',() => {

    component.number = 0

    component.reset()

    expect(component.number).toEqual(0)
  });

  

});
