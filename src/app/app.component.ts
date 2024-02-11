import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {MatGridListModule} from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { SchedulerPageComponent } from './scheduler-page/scheduler-page.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatGridListModule,CommonModule,SchedulerPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{

  constructor() {

  }

  ngOnInit(): void {
  }

}
