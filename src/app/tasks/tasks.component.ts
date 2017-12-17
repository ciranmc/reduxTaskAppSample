import { Component, OnInit } from '@angular/core';
import { TasksModel } from './models/tasks.model';
import { ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'tasks',
    template: `
        <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <h3>TASKS MEETS REDUX WITH ONPUSH CHANGE DETECTION</h3>
                    <app-task-table></app-task-table>
                    <app-task-progress></app-task-progress>
                    <router-outlet></router-outlet>      
            </div>
            </div>
        </div>
    `,
    host: { 'class': 'vertical-flex' },
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TasksComponent{

    constructor() {
    }

}
