import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { CounterComponent } from '../counter/counter.component';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;
  let fixture2: ComponentFixture<CounterComponent>
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent,CounterComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset sum = 0 when call the reset method', () => {
      
    
    component.reset()
    expect(component.sum).toEqual(0)
  });
});
