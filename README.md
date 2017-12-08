# Redux Sample Task App

This project demonstrates an implementation of the Redux pattern using @ngrx/store and @ngrx/effects with HttpClient.
It loads a sample json payload from an api and displays it as a table of tasks. It simulates an api being slow (5 seconds)to respond. The intention of the 5 second delay it to allow you to view the state of the redux store as various actions are dispatched. (I recommend installing the redux dev tools extension for chrome. http://extension.remotedev.io/)

Step 1. After downloading the repo run `npm install` from a terminal window. This should download @ngrx/store and @ngrx/effects and any other dependencies. Note( "typescript": "~2.3.3" is used as older versions won't work with the latest ngrx stuff)

Step 2. To run the app run `ng serve` from the command line.

## Key Features
1. The `task-list` component has no knowledge of the redux store. I use a simple facade (tasks.model) to abstract this away.
2. The `tasks.model`  dispatches the initial LOAD_TASKS action.
3. The `tasks.effects` will make the http get request to the api as a result of LOAD_TASKS. Once the http get returns either the LOAD_TASKS_COMPLETE or LOAD_TASKS_FAILED will be called.
4. The `tasks.reducer` is a pure function which will update the store based on the actions above.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).
Before running the tests make sure you are serving the app via `ng serve`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
