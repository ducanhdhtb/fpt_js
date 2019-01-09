/* Array.filter
The idea here is similar to Array.map,
 except instead of transforming individual values, we want to filter existing values
 . Without any functions (besides Array.push),
  say we want to filter out values in an array that are less than 5:
  */
 var arr = [2, 4, 6, 8, 10];
var filteredArr = [];
for(var i = 0; i < arr.length; i++) {
    if(arr[i] >= 5) {
        filteredArr.push(arr[i]);
    }
}
console.log(filteredArr); // -> [6, 8, 10]
// Let’s abstract this to a function so we can remove values below 5 in any array.
function filterLessThanFive(arr) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(arr[i] >= 5){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var arr1 = [2, 4, 6, 8, 10];
var arr1Filtered = filterLessThanFive(arr1);
console.log(arr1Filtered); // -> [6, 8, 10]
// Let’s make it so we can filter out all values below any arbitrary value.
function isGreaterThan5(item) {
    return item > 5;
}
function filterLessThanFive(arr) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(isGreaterThan5(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var originalArr = [2, 4, 6, 8, 10];
var newArr = filterLessThanFive(originalArr);
console.log(newArr); // -> [6, 8, 10]
//Abstracting out the filtering functionality
function testFunction(item) {
    return item > 5;
}
function filter(arr, testFunction) {
    var filteredArr = [];
    for(var i = 0; i < arr.length; i++) {
        if(testFunction(arr[i])) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var originalArr = [2, 4, 6, 8, 10];