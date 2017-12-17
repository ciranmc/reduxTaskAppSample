import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TaskProgressComponent } from './components/task-progress.component';
import { TaskTableComponent } from './components/task-table.component';
import { TasksComponent } from './tasks.component';


@NgModule({
  imports: [ RouterModule.forChild([
    { path: 'tasks', component: TasksComponent,
      children : [
      //  { path: 'table', component: TaskTableComponent },
       // { path: 'list', component: TaskListComponent }
      ]
    }
  ])],
  exports: [ RouterModule ]
})
export class TasksRoutingModule {}
