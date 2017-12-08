import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import * as fromTasks from './Tasks/reducers/tasks.reducer';
import { TaskListComponent } from './Tasks/components/task-list.component';
import { TasksEffects } from './Tasks/effects/tasks.effects';
import { TasksModel } from './Tasks/models/tasks.model';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { HttpUtil } from './Tasks/services/httpUtil.service';



@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    StoreModule.forRoot({ tasksStore: fromTasks.tasksReducer }),
    EffectsModule.forRoot([TasksEffects]),
    StoreDevtoolsModule.instrument()
  ],
  providers: [TasksModel,HttpUtil],
  bootstrap: [AppComponent]
})
export class AppModule { }
