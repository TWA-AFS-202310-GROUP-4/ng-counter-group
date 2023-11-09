/* eslint-disable no-return-assign */
import { Component } from '@angular/core'

@Component({
  selector: 'app-counter-group',
  templateUrl: './counter-group.component.html',
  styleUrls: ['./counter-group.component.css']
})
export class CounterGroupComponent {
  counters: Array<{ number: number }> = []

  get sum (): number {
    return this.counters.reduce((result, current) => result + current.number, 0)
  }

  onAdd (): void {
    this.counters.push({ number: 0 })
  }

  onResetAll (): void {
    this.counters.forEach(v => v.number = 0)
  }
}
