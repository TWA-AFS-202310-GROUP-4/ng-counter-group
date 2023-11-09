import { Component, Input, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  @Input()
  number: number = 0;

  @Output()
  numberChangeEvent = new EventEmitter();

  onDecreaseButtonClick() {
    this.number--;
    this.numberChangeEvent.emit(this.number);
  }

  onIncreaseButtonClick() {
    this.number++;
    this.numberChangeEvent.emit(this.number);
  }
}
