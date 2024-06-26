# OnRecord

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## =================== OnRecord project notes ====================================== ##

- angular version 17.3.6
- angular material 17.3.7 :- https://material.angular.io/guide/getting-started
- reference link :- https://smarthr.dreamstechnologies.com/react/template/ | https://einfosoft.com/templates/admin/kuber/source/light/#/authentication/signin

## OnRecord project typography

- font-family: Poppins          https://fonts.google.com/specimen/Poppins
- icons : google material icons https://fonts.google.com/icons
- typography : custom typography

## Setting local db json server api in angular

 - (https://www.npmjs.com/package/json-server) URL and run "npm i json-server" command in project root folder. (npm i json-server)

 - (https://www.npmjs.com/package/concurrently) URL and run "npm i concurrently" command in project root folder. (npm i concurrently)

 - "D:\Workspace\Angular\Angular-local-api\angular-dashboard\package.json" this file path in angular project and add below commands.

 - "json-server": "json-server --watch db.json --port 3000",

 - "start-dev": "concurrently \"npm run json-server\" \"ng serve -o\""

 - create local DB file (db.json) in project root folder. create object {"user": [ add value https://jsonplaceholder.typicode.com/users ]}

 - then run "npm run start-dev" in your terminal and your project will run.

 - localhost for local db (http://localhost:3000/user)

 - localhost 4200 for angular changes.