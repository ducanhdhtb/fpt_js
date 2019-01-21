// Exercise 05: Template String
// Given the following code, you must complete the upper function and use it as a tag function for the template string `Hello ____ (@____), welcome to the ____!` so the output is `true`

function upper(strings, ...values) {}

var name = 'Nguyen Van A',
  account = 'ANV',
  classname = 'FrontEnd AngularJS';

console.log(
  `Hello ____ (@____), welcome to the ____!` ===
    'Hello NGUYEN VAN A (@ANV), welcome to the FRONTEND ANGULARJS!'
);
