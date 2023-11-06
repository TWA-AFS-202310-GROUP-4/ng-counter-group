import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0
  @Input() id! : number
  @Output() change = new EventEmitter()
  @Output() delete = new EventEmitter<number>();
  
  onIncrease() {
    this.number++
    this.change.emit(this.number)
  }

  ondecrease() {
    this.number--
    this.change.emit(this.number)
  }
  reset() {
    this.number = 0
    this.change.emit(this.number)
  }
}
