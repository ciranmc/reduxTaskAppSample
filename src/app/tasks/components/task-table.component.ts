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
  selector: 'app-task-table',
  templateUrl: './task-table.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class TaskTableComponent {

  effectStatus = EffectStatus;
  taskStatus = TaskStatus;

  tasks$: Observable<Task[]>;
  tasksStatus$: Observable<EffectStatus>;

 
  constructor(private _model: TasksModel) 
  {
      this.tasks$ = _model.tasks$;
      this.tasksStatus$ = _model.tasksStatus$;
  }

  onStartTask(task: Task): void {
    let clonedtask = Object.assign({},task);
    clonedtask.status = TaskStatus.InProgress;
 
    this._model.updateTask(clonedtask);
  }

  onFinishTask(task: Task): void {
    
    let clonedtask = Object.assign({},task);
    clonedtask.status = TaskStatus.Done;

    this._model.updateTask(clonedtask);
  }
}
