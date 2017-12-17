import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';

import * as TasksActions from '../actions/tasks.actions';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../../environments/environment';
import { of } from 'rxjs/observable/of';
import { HttpUtil } from 'app/tasks/services/httpUtil.service';

import { TaskStatus } from '../entities';

@Injectable()
export class TasksEffects {

  @Effect() tasksLoad$: Observable<Action> = this.actions$.ofType(TasksActions.ActionTypes.LOAD_TASKS)
    .map(toPayload)
    .mergeMap(payload =>
      
      this.http.get(`https://firestore.googleapis.com/v1beta1/projects/angular-task-e7f39/databases/(default)/documents/tasks`,
               { headers: this.httpUtil.noCacheHeaders } )
        .map((data) => {
          return ({ type: TasksActions.ActionTypes.LOAD_TASKS_COMPLETE, payload: data })
        })
        .catch(() => {
          return of({ type: TasksActions.ActionTypes.LOAD_TASKS_FAILED })
        })

    );

    @Effect() updateTask$: Observable<Action> = this.actions$.ofType(TasksActions.ActionTypes.UPDATE_TASK)
    .map(toPayload)
    .mergeMap(taskPayload =>      
              of( 
                  //This is a mock updated data returned from the server
                     {
                        id:taskPayload.id,
                        status:taskPayload.status,
                        title:taskPayload.title,
                        description:taskPayload.description
                       }
                )
              .map((data) => {
                return ({ type: TasksActions.ActionTypes.UPDATE_TASK_COMPLETE, payload: data })
              })
              .catch(() => {
                return of({ type: TasksActions.ActionTypes.UPDATE_TASK_FAILED })
              })

          ); 

  constructor(
    private http: HttpClient,
    private actions$: Actions,
    private httpUtil: HttpUtil
  ) { }

}
