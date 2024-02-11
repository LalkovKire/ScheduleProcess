import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Process } from '../../../shared/model/Algorithms';

@Injectable({
  providedIn: 'root'
})
export class SharedSchedulerDataService {

  private proccessSubject = new BehaviorSubject<Process[]>([
    {name: "A", arrivalTime: 0, executionTime: 0, waitingTime: 0,timeInSystem: 0},
    {name: "B", arrivalTime: 0, executionTime: 0, waitingTime: 0,timeInSystem: 0},
    {name: "C", arrivalTime: 0, executionTime: 0, waitingTime: 0,timeInSystem: 0},
    {name: "D", arrivalTime: 0, executionTime: 0, waitingTime: 0,timeInSystem: 0},
  ])
  private averageWaitingTime = new BehaviorSubject<number>(0);
  private averageSystemTime = new BehaviorSubject<number>(0);
  public averageWaiting$ : Observable<number> = this.averageWaitingTime.asObservable();
  public averageSystem$ : Observable<number> = this.averageSystemTime.asObservable();
  public proccess$ : Observable<Process[]> = this.proccessSubject.asObservable();

  constructor() { }

  public updateProccess(proccess : Process[]) : void {
      this.proccessSubject.next(proccess);
  }

  public updateAverageTimes(waitingTime: number, systemTime: number) {
    this.averageSystemTime.next(systemTime);
    this.averageWaitingTime.next(waitingTime);
  }
}
