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

  it('should add a counter when call onAdd given a item', () => {
    const length = component.counters.length;

    component.onAdd();

    expect(component.counters.length).toEqual(length+1);
  })

  it('should make all counter o when call onResetAll', () => {
    component.counters = [
      {number:1},
      {number:0}
    ]
    const len =  component.counters.length ;

    component.onResetAll()

    expect(component.counters.filter(v => v.number==0).length).toEqual(len);
  })
});
