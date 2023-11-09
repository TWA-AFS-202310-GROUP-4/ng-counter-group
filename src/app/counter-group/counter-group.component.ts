import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  counters : {num : number}[] = [
    {num : 0},
    {num : 1},
    {num : 2}
  ];

  get sum() {
    return this.counters.reduce((ret, cur) => ret + cur.num, 0);
  }

  onAdd() {
    this.counters.push({num : 0});
  }

  onReset() {
    this.counters.map(c => c.num = 0);
  }

  removeCounter(idx : number) {
    this.counters.splice(idx, 1);
  }
}
