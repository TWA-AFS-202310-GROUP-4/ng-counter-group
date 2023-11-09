import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0;
  @Input() indexRemoved = 0;
  @Output() change = new EventEmitter();
  @Output() remove = new EventEmitter();
  onIncrease(){
    this.number++;
    this.change.emit(this.number)
  }
  onDecrease(){
    this.number--;
    this.change.emit(this.number)
  }
  onRemove(){
    this.remove.emit(this.indexRemoved);
  }
  onReset(){
    this.number = 0
    this.change.emit(this.number)
  }

}
