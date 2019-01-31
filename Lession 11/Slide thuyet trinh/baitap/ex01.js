var myMap = new Map();
var myWeakMap = new WeakMap();
var object1 = {'foo':'bar'};
var object2 = {'bar':'baz'};
myMap.set(object1, 'hello');
myWeakMap.set(object2, 'Hello');

console.log(myMap.get(object1)); // can get value is hello
console.log(myWeakMap.get(object2)); // 

object1 = null;
object2 = null;
myMap.forEach(function(key,value){
    console.log(key,value);
})
myWeakMap.forEach(function(key,value){
    console.log(key,value);
})
