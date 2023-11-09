import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  onDecreaseButtonClick() {
    this.number--;
  }
  onIncreaseButtonClick() {
    this.number++;
  }
  number: number = 0;
}
