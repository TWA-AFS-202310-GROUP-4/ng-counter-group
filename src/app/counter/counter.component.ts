import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input() numberValue: number = 0;
  @Input() id! : number;
  @Output() change = new EventEmitter();
  @Output() onDelete: EventEmitter<any> = new EventEmitter();

  onIncrease() {
    this.numberValue ++;
    this.change.emit(this.numberValue);
  }

  onDecrease() {
    this.numberValue --;
    this.change.emit(this.numberValue);
  }

  get isShowDecreaseButton() {
    return this.numberValue >= 0;
  }

  get isShowIncreaseButton() {
    return this.numberValue <= 10;
  }

  get textBackgroundColor() {
    if (this.numberValue > 10) return "red";
    if (this.numberValue < 0) return "green";
    return "";
  }

  onReset() {
    this.numberValue = 0;
    this.change.emit(this.numberValue);
  }

  delete() {
    this.onDelete.emit(this.id);
  }
}
