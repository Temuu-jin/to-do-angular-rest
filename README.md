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
- REST API

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

### Packages needed to be installed:

To install the following packages follow their respective documentations

- RxJS,
- Angular Material,
- Highchart

### Helpful JSON Responses from API:

User:
{
"id": 1,
"name": "Leanne Graham",
"username": "Bret",
"email": "Sincere@april.biz",
"address": {
"street": "Kulas Light",
"suite": "Apt. 556",
"city": "Gwenborough",
"zipcode": "92998-3874",
"geo": {
"lat": "-37.3159",
"lng": "81.1496"
}
},
"phone": "1-770-736-8031 x56442",
"website": "hildegard.org",
"company": {
"name": "Romaguera-Crona",
"catchPhrase": "Multi-layered client-server neural-net",
"bs": "harness real-time e-markets"
}
}

Todos:
{
"userId": 1,
"id": 1,
"title": "delectus aut autem",
"completed": false
}
