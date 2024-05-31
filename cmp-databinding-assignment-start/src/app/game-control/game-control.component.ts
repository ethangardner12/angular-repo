import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent implements OnInit, OnDestroy {
  @Output() intervalFired = new EventEmitter<number>();
  private intervalRef: any;
  private lastNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onStartGame() {
    this.intervalRef = setInterval(() => {
      this.intervalFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    },1000);
  }

  onStopGame() {
    console.log(this.lastNumber);
    clearInterval(this.intervalRef);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalRef);
  }
}
