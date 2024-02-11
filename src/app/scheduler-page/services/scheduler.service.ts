import { Injectable } from '@angular/core';
import { Process } from '../../../shared/model/Algorithms';
import { SharedSchedulerDataService } from './shared-scheduler-data.service';

@Injectable({
  providedIn: 'root'
})
export class SchedulerService {

  constructor(private service: SharedSchedulerDataService) { }

  public FirstComeFirstServe() {
    let proccess : Process[] = [];
    this.service.proccess$.subscribe( r => proccess = r);
    let sumOfArrival : number = 0;   
    let totalExectuionTime : number = 0;
    let totalWaitingTime: number = 0;
    let averageWaitingTime : number = 0;
    let averageSystemTime : number = 0;

    proccess.forEach(pr => sumOfArrival += pr.arrivalTime);

    if (sumOfArrival > 0) {
      proccess.sort((a,b) => a.arrivalTime - b.arrivalTime);
      
    } else {
      proccess.forEach( pr => { 
        pr.waitingTime = pr.arrivalTime + totalWaitingTime;
        totalWaitingTime += pr.executionTime;
      });
      proccess.forEach( pr => averageWaitingTime += pr.waitingTime);
      averageWaitingTime = averageWaitingTime/5;

      proccess.forEach( pr => {
        pr.timeInSystem = pr.executionTime + totalExectuionTime;
        totalExectuionTime += pr.executionTime;
      })
      proccess.forEach(pr => averageSystemTime += pr.timeInSystem);
      averageSystemTime = averageSystemTime/5;
      this.service.updateAverageTimes(averageWaitingTime,averageSystemTime);
    }
  }
}
