
import * as TasksActions from '../actions/tasks.actions';

import { Effect, EffectSources } from '@ngrx/effects';

import { Task,TaskStatus } from '../entities';
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

        case TasksActions.ActionTypes.UPDATE_TASK: {
            return {
                ...state
            };
        }
        
        case TasksActions.ActionTypes.UPDATE_TASK_COMPLETE: {

            return {
                ...state,
                taskList:updateTask(state.taskList, action.payload)
            };
        }


    default:
        return state;
  }
}

export function populateTasks(documents: any) {
    
    let tasks :Task[];  
    tasks = [];
    let taskId:number;
    taskId=1;

    documents.forEach(taskItem => {

            taskId++;
            tasks.push( {title:taskItem.fields.title.stringValue,
                         description:taskItem.fields.description.stringValue,
                         status:TaskStatus.NotStarted,
                         id:taskId
                            })
        } 
    );

    return tasks;
}


export function updateTask(tasks, updatedTask) {
    let newTasksObject = tasks.map(x => Object.assign({}, x));
    
    let objIndex = newTasksObject.
                    findIndex((task =>
                    task.id === updatedTask.id));
                    newTasksObject[objIndex] = updatedTask;

    return newTasksObject;
}
