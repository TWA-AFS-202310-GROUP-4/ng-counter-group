import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { CounterComponent } from '../counter/counter.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent, CounterComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it ("should delete a number from counters when call removeAcounter", () => {
    component.removeACounter(2)
    expect(component.counters.length).toBe(2)
  })

  it ("should reset all number to 0 when call resetAll funtion", () => {
    component.resetAll();
    expect(component.counters[0].num).toBe(0)
    expect(component.counters[1].num).toBe(0)
    expect(component.counters[2].num).toBe(0)
  })
});
