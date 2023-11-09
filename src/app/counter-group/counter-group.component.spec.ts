import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { CounterComponent } from '../counter/counter.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent, CounterComponent],
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get total num when getsum', () => {
    component.counters = [{ num: 3 }, { num: 2 }, { num: 5 }];

    expect(component.counterSum).toEqual(10);
  });

  it('should reduce a counter when removeCounter', () => {
    component.counters = [{ num: 3 }, { num: 2 }, { num: 5 }];
    let index = 1;

    component.removeCounter(index);

    expect(component.counterSum).toEqual(8);
    expect(component.counters.length).toEqual(2);
  });

  it('should get 0 when resetallCounters', () => {
    component.counters = [{ num: 3 }, { num: 2 }, { num: 5 }];

    component.resetAllCounters();

    expect(component.counterSum).toEqual(0);
    expect(component.counters.length).toEqual(3);
  });

  it('should add counter to counters when onAdd', () => {
    component.counters = [{ num: 3 }, { num: 2 }, { num: 5 }];

    component.onAdd();

    expect(component.counterSum).toEqual(10);
    expect(component.counters.length).toEqual(4);
  });
});
