import { Action } from '@ngrx/store';
// Types
import { type } from './type';

export const ActionTypes = {
    LOAD_TASKS: type('LOAD TASKS'),
    LOAD_TASKS_COMPLETE: type('LOAD TASKS COMPLETE'),
    LOAD_TASKS_FAILED: type('LOAD TASKS FAILED'),
    DELETE_TASK: type('DELETE TASK')
    };

export class LoadTasksAction implements Action {
    readonly type = ActionTypes.LOAD_TASKS;
    constructor( public payload: string ) { }
}


