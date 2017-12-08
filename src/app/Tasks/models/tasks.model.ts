import * as taskActions from '../actions/tasks.actions';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Task } from '../entities';
import { Store } from '@ngrx/store';
import { EffectStatus } from '../effects/effects-status.enum';

@Injectable()
export class TasksModel {

  tasks$: Observable<Task[]>;
  tasksStatus$: Observable<EffectStatus>;


  constructor(protected _store: Store<any>) {
    
    this.tasks$ = this._store.select(s => s.tasksStore.taskList);

    this.tasksStatus$ = this._store.select(s => s.tasksStore.taskStatus);
  }


  loadTasks(query = '') { 
    this._store.dispatch(new taskActions.LoadTasksAction(query));
  }

}
