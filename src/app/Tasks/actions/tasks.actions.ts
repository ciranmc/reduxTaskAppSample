import { Action } from '@ngrx/store';
// Types
import { type } from './type';
import { Task } from '../entities';

export const ActionTypes = {
    LOAD_TASKS: type('LOAD TASKS'),
    LOAD_TASKS_COMPLETE: type('LOAD TASKS COMPLETE'),
    LOAD_TASKS_FAILED: type('LOAD TASKS FAILED'),
    UPDATE_TASK: type('UPDATE TASK'),
    UPDATE_TASK_COMPLETE: type('UPDATE TASK COMPLETE'),
    UPDATE_TASK_FAILED: type('UPDATE TASK FAILED'),
    };

export class LoadTasksAction implements Action {
    readonly type = ActionTypes.LOAD_TASKS;
    constructor( public payload: string ) { }
}

export class UpdateTaskAction implements Action {
    readonly type = ActionTypes.UPDATE_TASK;
    constructor( public payload:Task ) { }
}

