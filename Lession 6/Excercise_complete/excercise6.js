function makeUpperCase(str) {
    return str.toUpperCase();
 }
// Cách viết hàm map 
// step 1 : truyền tham số là mảng và hàm
// Step 2 : mảng truyền vào sẽ được clone sang một mảng mới
 function map(arr, multiplyFunction) {
    var newArr = [];
    
    for(var i = 0; i < arr.length; i++) {
        newArr[i] = multiplyFunction(arr[i]);
    }
    return newArr;
}
// Test 1 
var arr = ['abc','def','gih'];
var afterConvert = map(arr,makeUpperCase);
console.log(afterConvert);
// Link tham khao https://codeburst.io/array-functions-map-filter-18a6e5f75da1
