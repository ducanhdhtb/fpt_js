/* 6. Without writing any new funcitons, show three ways to create the inc function (adds 1 to a number and returns it) */

var inc = addf(1);
var inc = curry(add, 1);
var inc = liftf(add)(1);