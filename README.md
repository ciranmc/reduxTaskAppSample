# Redux Sample Task App

This project demonstrates an implementation of the Redux pattern using @ngrx/store and @ngrx/effects with HttpClient.
It loads a sample json payload from an api and displays it as a table of tasks.(I recommend installing the redux dev tools extension for chrome. http://extension.remotedev.io/)

Step 1. After downloading the repo run `npm install` from a terminal window. This should download @ngrx/store and @ngrx/effects and any other dependencies. Note( "typescript": "~2.3.3" is used as older versions won't work with the latest ngrx stuff)

Step 2. To run the app run `ng serve` from the command line.

## Key Features
1. Redux pattern using @ngrx/store and @ngrx/effects.
2. Demonstrates basic routing in Angular.
3. OnPush change detection strategy.
4. Karma/Jasmine unit tests.
5. async pipe.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Tests
To run the Karma/Jasmine tests run `ng test` from the command line.

## View of app in action
![Alt text](TheAppInAction.png?raw=true "View of app in action")

