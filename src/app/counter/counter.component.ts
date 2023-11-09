import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @ Input() number = 0;
  @ Output() change = new EventEmitter()
  @ Output() remove = new EventEmitter()
  @ Output() reset = new EventEmitter()

  onIncrease() {
    this.number++;
    this.change.emit(this.number)
  }

  onDecrease() {
    this.number--;
    this.change.emit(this.number)
  }

  onRemove() {
    this.remove.emit()
  }

  onReset() {
    this.number = 0;
    this.reset.emit(0)
  }
}
