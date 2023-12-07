# ToDoAngularRest

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.3.

## Create a To-Do App with JSONplaceholder API

https://jsonplaceholder.typicode.com

Checkout the JSON API Endpoint responses

Build a Admin-dashboard with charts using this package:
https://www.highcharts.com/

Let Users create To-Do lists implementing the api

login signup

Required:

- Angular 17,
- Angluar Cli,
- Tailwindcss,
- Angular Material,
- Highchart,
- REST API,
- RxJS,

### Install TailwindCSS:

pnpm install -D tailwindcss postcss autoprefixer
npx tailwindcss init

tailwind.config.js:

````/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}```
````

styles.css:

````@tailwind base;
@tailwind components;
@tailwind utilities;```
````
