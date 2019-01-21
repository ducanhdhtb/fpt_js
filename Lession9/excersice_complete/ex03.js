// Use rest/spread operator so the code below display `true`

function foo() {}

function bar() {
  var a1 = [2, 4];
  var a2 = [6, 8, 10, 12];

  return foo();
}

// DO NOT MODIFY BELOW CODE
console.log(bar().join('') === '281012');
// true
