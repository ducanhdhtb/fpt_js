// Function summery\
/*
function summary(arr){
    var total = 0;
    for(i = 0; i< arr.length;i++){
        total+=arr[i];
    }
    return total;
}
*/

//console.log(summary([1,2,3,4,99,999]));
//Function nhan

/* 
function nhan(arr){
    var total = 1;
    for(i = 0; i< arr.length;i++){
        total*=arr[i];
    }
    return total;
}

console.log(nhan([1,2,3,4]));
*/
/* Syntax 
Definition and Usage
The forEach() method calls a provided function once for each element in an array, in order.

Note: forEach() does not execute the function for array elements without values.
array.forEach(function(currentValue, index, arr), thisValue)
currentValue	Required. The value of the current element
index	Optional. The array index of the current element
arr	Optional. The array object the current element belongs to
*/

const days = ['Mon','Tues','Wed','Thurs','Fri','Sat'];

days.forEach( function(day,index,arr){ // day... duoc hieu la value cua mang  , index la chi so cua mang, tham so thu 3 la mang
    console.log(`Start with ${index} -- ${day} -- ${arr[index]}`);
});