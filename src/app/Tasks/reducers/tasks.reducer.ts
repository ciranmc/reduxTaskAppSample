
import * as TasksActions from '../actions/tasks.actions';

import { Effect, EffectSources } from '@ngrx/effects';

import { Task } from '../entities';
import { EffectStatus } from '../effects/effects-status.enum';


export interface TasksState {
    
  taskList: Task[];
  taskStatus: EffectStatus;
}

export const initialState: TasksState = {
    
  taskList: null,
  taskStatus: null
}


export function tasksReducer(state: TasksState = initialState, action: any): TasksState {
    switch (action.type) {

        case TasksActions.ActionTypes.LOAD_TASKS: {
            return {
                ...state,
                taskStatus: EffectStatus.IsLoading
            };
        }
        case TasksActions.ActionTypes.LOAD_TASKS_COMPLETE: {
            return {
                ...state,
                taskList: populateTasks(action.payload.documents),
                taskStatus: EffectStatus.Complete
            };
        }
        case TasksActions.ActionTypes.LOAD_TASKS_FAILED: {
            return {
                ...state,
                taskList: [],
                taskStatus: EffectStatus.HasFailed
            };
        }

    default:
        return state;
  }
}

export function populateTasks(documents: any) {
    
    SimulateSlowResponseFromServer(5000);

    let tasks :Task[];  
    tasks = [];


    documents.forEach(taskItem => {
            tasks.push( {title:taskItem.fields.title.stringValue, description:taskItem.fields.description.stringValue})
        } 
    );

    return tasks;
}

function SimulateSlowResponseFromServer(ms){
    var start = new Date().getTime();
    var end = start;
    while(end < start + ms) {
      end = new Date().getTime();
   }
 }