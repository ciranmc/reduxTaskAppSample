
// import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TasksRoutingModule } from './tasks-routing.module';

import * as fromTasks from './reducers/tasks.reducer';
import { TaskTableComponent } from './components/task-table.component';
import { TaskProgressComponent } from './components/task-progress.component';
import { TasksComponent } from './tasks.component';
import { TasksEffects } from './effects/tasks.effects';
import { TasksModel } from './models/tasks.model';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpUtil } from './services/httpUtil.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        HttpClientModule,
        TasksRoutingModule,
        StoreModule.forRoot({ tasksStore: fromTasks.tasksReducer }),
        EffectsModule.forRoot([TasksEffects]),
        StoreDevtoolsModule.instrument()
    ],
    declarations: [
        TaskTableComponent,
        TaskProgressComponent,
        TasksComponent
    ],
    providers: [
        TasksModel,HttpUtil
    ]
})
export class TasksModule { }
