var map = new Map();
var weakmap = new WeakMap();

(() => {
  var a = { x: 1 };
  var b = { y: 2 };

  map.set(a, 11);
  weakmap.set(b, 22);
})()