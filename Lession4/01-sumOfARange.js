/*Ý tưởng của bài toán
Bước 1 : Từ input[1,10] đầu vào  chúng ta sẽ chuyển đổi thành một mảng mới [1,2,3,4,5,6,7,8,9,10];
Bước 2 : Tính tổng các phần tử từ min tới max của một mảng
*/
var array = [];

function changeIntoRangeArray (arr){  
    var min = Math.min(arr[0],arr[1]); //Find mix of an Array   
    var max = Math.max(arr[0],arr[1]);  //Find max of an Array
    // Run for loop to create Array from user input 
    for (var i=min;i<=max;i++){  
        array.push(i);  
    }
    return array; // return the array to be used in the sum function
}  

function sum(array){  
    var total = 0; // need to create a variable outside the loop scope
    for(var i in array){  
       total = total+array[i];  
    }
    return total;
}  

console.log(sum(changeIntoRangeArray([1,10]))); // pass the array correctly 