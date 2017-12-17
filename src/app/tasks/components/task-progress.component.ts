import 'rxjs/add/operator/skip'
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TasksModel } from '../models/tasks.model';
import { Task,TaskStatus } from '../entities/';
import { EffectStatus } from '../effects/effects-status.enum';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-task-progress',
  templateUrl: './task-progress.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskProgressComponent implements OnInit  {

  effectStatus = EffectStatus;
  tasks$: Observable<Task[]>;
  tasksStatus$: Observable<EffectStatus>;

  notStartedPercentage:number;
  inProgressPercentage:number;
  donePercentage:number;
 
  constructor(private _model: TasksModel) 
  {
      this.tasks$ = _model.tasks$;
      this.tasksStatus$ = _model.tasksStatus$;
  }

  ngOnInit()
  {
      this.tasks$.subscribe( (items)=>this.updatePercentages(items));
  }

  updatePercentages(tasks:Task[])
  {
   
    if(tasks!==null)
    {
        let tasksCount=0;
        let notStartedCount=0;
        let inProgressCount=0;
        let doneCount=0;

          tasks.forEach((item)=>{
                  tasksCount++;

                  if(item.status===TaskStatus.NotStarted)
                    notStartedCount++;
                  if(item.status===TaskStatus.InProgress)
                    inProgressCount++;
                  if(item.status===TaskStatus.Done)
                    doneCount++;
              });

        this.notStartedPercentage = +((notStartedCount/tasksCount)*100).toFixed(2);
        this.inProgressPercentage =  +((inProgressCount/tasksCount)*100).toFixed(2);
        this.donePercentage = +((doneCount/tasksCount)*100).toFixed(2);
    }
  } 
}
