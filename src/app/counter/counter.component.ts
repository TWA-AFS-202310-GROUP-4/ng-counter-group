import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  numberValue: number = 0;

  onIncrease() {
    this.numberValue ++;
  }

  onDecrease() {
    this.numberValue --;
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
  }
}
