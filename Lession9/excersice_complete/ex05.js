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


// --------------------- v- ----------------
function upper(strings, ...values) {
  let result = values.map((value) => {
      return value.toUpperCase();
  })
  let res = '';
  for (let i = 0; i < strings.length; i++) {
      if (result[i] == undefined) {
          result[i] = ''
      }
      res = res + strings[i] + result[i]
  }
  return res;
}

var name = 'Nguyen Van A',
account = 'ANV',
classname = 'FrontEnd AngularJS';

console.log(

upper`Hello ${name} (@${account}), welcome to the ${classname}!` ===
  'Hello NGUYEN VAN A (@ANV), welcome to the FRONTEND ANGULARJS!'
);


//----------------- solved by duong

var locale = 'VN';function upper(strings, ...values) {  let res = '';  for (let i = 0; i < strings.length; i += 1) {    if (strings[i].includes('Hello') && locale === 'VN') {      res += 'Xin chao ';    } else {      res += strings[i];    }    if (values[i]) {      res += values[i].toUpperCase();    }  }  return res;}var name = 'Nguyen Van A',  account = 'ANV',  classname = 'FrontEnd AngularJS';console.log(  upper`Hello ${name} (@${account}), welcome to the ${classname}!` ===    'Hello NGUYEN VAN A (@ANV), welcome to the FRONTEND ANGULARJS!');Sent on:4:09 pm