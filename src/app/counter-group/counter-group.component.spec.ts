import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterGroupComponent } from './counter-group.component';
import { compileClassMetadata } from '@angular/compiler';

describe('CounterGroupComponent', () => {
  let component: CounterGroupComponent;
  let fixture: ComponentFixture<CounterGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CounterGroupComponent]
    });
    fixture = TestBed.createComponent(CounterGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get correct counter list length when create new counter ',()=>{
    component.onAdd();
    expect(component.counters.length).toEqual(4);
  });

  it('should get correct counter list length when remove new counter ',()=>{
    component.onRemove(0);
    expect(component.counters.length).toEqual(2);
  });

  it('should get correct counter list length when remove new counter ',()=>{
    component.onResetAll();
    component.counters.forEach(num => expect(num.num).toEqual(0))
  });

  it('should get correct counter sum  when call sum ',()=>{
    expect(component.sum).toEqual(6)
  })





});
