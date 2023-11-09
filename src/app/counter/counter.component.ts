import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() number = 0;
  @Output() numberChange = new EventEmitter();

  onIncrease() {
    this.number++;
    this.sendValueByEvent()
  }

  onDecrease() {
    this.number--;
    this.sendValueByEvent()
  }

  resetNumber() {
    this.number = 0;
    this.sendValueByEvent()
  }

  sendValueByEvent(){
    this.numberChange.emit(this.number)
  }
}
