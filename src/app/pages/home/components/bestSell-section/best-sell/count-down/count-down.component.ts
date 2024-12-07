import { Component, OnDestroy, OnInit } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'count-down',
  standalone: true,
  imports: [TranslatePipe],
  templateUrl: './count-down.component.html',
  styleUrl: './count-down.component.css'
})
export class CountDownComponent implements OnInit , OnDestroy {
  countdownTime: number = 130920000; // Exemple: 1 jour en secondes (86400 secondes)
  private intervalId: any;

  days: number = 0;
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit() {
    this.startCountdown();
  }

  ngOnDestroy() {
    this.stopCountdown();
  }

  startCountdown() {
    this.intervalId = setInterval(() => {
      if (this.countdownTime > 0) {
        this.countdownTime--;
        this.updateTime();
      } else {
        this.stopCountdown();
      }
    }, 1000);
  }

  stopCountdown() {
    clearInterval(this.intervalId);
  }

  updateTime() {
    this.days = Math.floor(this.countdownTime / 86400);
    this.hours = Math.floor((this.countdownTime % 86400) / 3600);
    this.minutes = Math.floor((this.countdownTime % 3600) / 60);
    this.seconds = this.countdownTime % 60;
  }
}
