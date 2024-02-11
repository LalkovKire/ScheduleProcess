import { Component, OnInit } from '@angular/core';
import { Process } from '../../../shared/model/Algorithms';
import { SchedulerService } from '../services/scheduler.service';
import { SharedSchedulerDataService } from '../services/shared-scheduler-data.service';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-process-table',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './process-table.component.html',
  styleUrl: './process-table.component.css'
})
export class ProcessTableComponent implements OnInit {
  
   formGroup : FormGroup;
   processCounter: number = 4;
   processNumberState: boolean = true;
   processes : Process[] = [];

  constructor(private formBuilder: FormBuilder, private state : SharedSchedulerDataService) {
    this.formGroup = formBuilder.group({
      proc : formBuilder.array([])
    })
  }

  ngOnInit(): void {
    this.state.proccess$.subscribe((pr) => {
      this.processes = pr;
    })
    
    this.processes.forEach(pr => {
      const item = this.formBuilder.group({
        name: [pr.name],
        executionTime : [pr.executionTime],
        arrivalTime : [pr.arrivalTime]
      });
      this.proc.push(item);
    })
  }

  private updateFormArray(pr : Process) : void {
    const item = this.formBuilder.group({
      name: [pr.name],
      executionTime : [pr.executionTime],
      arrivalTime : [pr.arrivalTime]
    });
    this.proc.push(item)
  }

  get proc() {
    return this.formGroup.get('proc') as FormArray;
  }

  public addRow() : void {
    if (this.processCounter < 7) {
      const lastProcess = this.processes[this.processes.length - 1];
      const newName = String.fromCharCode(lastProcess.name.charCodeAt(0) + 1);
      const newProcess: Process = { name: newName, arrivalTime: 0, executionTime: 0, waitingTime: 0,timeInSystem: 0};
      this.processes.push(newProcess);
      this.state.updateProccess(this.processes);
      this.processCounter += 1;
      this.updateFormArray(newProcess);
    } else {
      this.processNumberState = false
    }
  }

}
