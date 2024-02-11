import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ProcessTableComponent } from './process-table/process-table.component';

@Component({
  selector: 'scheduler-page',
  standalone: true,
  imports: [CommonModule, ProcessTableComponent],
  templateUrl: './scheduler-page.component.html',
  styleUrl: './scheduler-page.component.css'
})
export class SchedulerPageComponent implements OnInit {

  ngOnInit(): void {
  }

  constructor(){}

}
