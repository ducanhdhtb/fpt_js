// // Fix the following code, so the output is `true`
// var x = 2,
// fns = [];

// (function() {
//   var x = 5;

//   for (var i = 0; i < x; i++) {
//     // ..
//   }
// })();

// // DO NOT MODIFY BELOW CODE
// console.log(x * 2 === fns[x * 2]());
// // true



// ----------------------- trung ----------------------
var x = 2
fns = [];

(function() {
  let j = x;  
    x = 5;
  for (var i = 0; i < x; i++) {
    if (i === (j * 2)) {
        function run() {
            return j * 2;
        }
        fns[j * 2] = run;
    }
  }
  x = j;
})();

// // DO NOT MODIFY BELOW CODE
console.log(x * 2 === fns[x * 2]());
// // true

// -----------------------Duong ----------------------
var x = 2,
fns = [];

(function() {
  var x = 5;

  for (var i = 0; i < x; i++) {
    let j = i;
    fns[i] = () =>{
      return i;
    }
  }
})();

// DO NOT MODIFY BELOW CODE
console.log(x * 2 === fns[x * 2]());
// true

