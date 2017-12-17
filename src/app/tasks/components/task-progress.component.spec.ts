import {TestBed, ComponentFixture, inject, async} from '@angular/core/testing';
import {TaskProgressComponent} from './task-progress.component';
import {Component, DebugElement} from "@angular/core";
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import {By} from "@angular/platform-browser";
import { TasksModel } from '../models/tasks.model';
import { Task,TaskStatus } from '../entities/';
import { EffectStatus } from '../effects/effects-status.enum';

let tasks:Task[]=[
    {
        title: "title 1",
        description:"description 1",
        status:TaskStatus.NotStarted,
        id:1
    },
    {
        title: "title 2",
        description:"description 2",
        status:TaskStatus.InProgress,
        id:2
    },
    {
      title: "title 3",
      description:"description 3",
      status:TaskStatus.Done,
      id:2
  }
];

// Task Model Mock
class MockTasksModel {
    tasks$: Observable<Task[]> = of(tasks);
    tasksStatus$: Observable<EffectStatus> = of(EffectStatus.Complete);
    loadTasks = jasmine.createSpy('loadTasks');
  }

  describe('TaskProgressComponent', () => {
    
      let comp:    TaskProgressComponent;
      let fixture: ComponentFixture<TaskProgressComponent>;
      let de: DebugElement;
      let el: DebugElement;
    
      beforeEach(async(() => {
        TestBed.configureTestingModule({
          declarations: [ TaskProgressComponent ], 
          providers: [ { provide: TasksModel, useClass: MockTasksModel }]
        })
        .compileComponents();  
      }));

      beforeEach(() => {
        fixture = TestBed.createComponent(TaskProgressComponent);
    
        comp = fixture.componentInstance; 
      });
    
    it('should create', () => {
      expect(comp).toBeTruthy();
    });

    /*
      ADD MORE TESTS HERE FOR THIS COMPONENT.
    */

    });
    
