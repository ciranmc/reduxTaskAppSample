import 'rxjs/add/operator/skip'
import 'rxjs/add/observable/interval';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { TasksModel } from '../models/tasks.model';
import { Task } from '../entities/';
import { EffectStatus } from '../effects/effects-status.enum';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  providers: [ TasksModel]
})

export class TaskListComponent implements OnInit {

  effectStatus = EffectStatus;
  tasks$: Observable<Task[]>;
  tasksStatus$: Observable<EffectStatus>;

 
  constructor(private _model: TasksModel) 
  {
      this.tasks$ = _model.tasks$;
      this.tasksStatus$ = _model.tasksStatus$;
  }
  
  ngOnInit() {
  
      this._model.loadTasks();

  }

}
