import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.scss'
})
export class ScheduleComponent {

  constructor(private router: Router) {}

  sObj: any;

  scheduleMode: boolean = JSON.parse(localStorage.getItem('mode') as any);

  todayC: boolean = true;
  tomorrowC: boolean = false;

  currentDate: Date = new Date();
  day: number = this.currentDate.getDate();
  month: number = this.currentDate.getMonth() + 1;
  year: number = this.currentDate.getFullYear();

  tomorrow: Date = new Date((new Date).valueOf() + 86350989);
  nDay: number = this.tomorrow.getDate();
  nMonth: number = this.tomorrow.getMonth() + 1;
  nYear: number = this.tomorrow.getFullYear();

  scheduleOptions: string[] = ['9:00 AM - 9:30 AM', '9:15 AM - 9:45 AM', '9:30 AM - 10:00 AM', '9:45 AM - 10:15 AM', '10:00 AM - 10:30 AM', '10:15 AM - 10:45 AM'];
  selectedSchedule: string = '';


  handleLeftClick() {
    history.back();
  }

  deliveryMode() {
    this.scheduleMode = true;
  }

  pickupMode() {
    this.scheduleMode = false;
  }

  handleToday(){
    this.todayC = true;
    this.tomorrowC = false;
  }

  handleTomorrow() {
    this.todayC = false;
    this.tomorrowC = true;
  }

  handleSelected(event: any) {
    this.selectedSchedule = event.target.value;
  }

  handleScheduleClick() {
    let currDate: string = "";
    let currSchedule: string = "";
    if(this.todayC) {
      currDate = this.day + "/" + this.month + "/" + this.year;
    }
    else {
      currDate = this.nDay + "/" + this.nMonth + "/" + this.nYear;
    }

    this.sObj = {
      cMode: this.scheduleMode,
      date: currDate,
      schedule: this.selectedSchedule
    }

    localStorage.setItem('schedule', JSON.stringify(this.sObj));

    this.router.navigate(['checkout']);
  }
}
