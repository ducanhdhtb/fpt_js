// Yêu cầu : Từ một mảng ["A","B","C","D"] ta sẽ đảo ngược mảng thành ["D","C","B","A"]
// Ý tưởng : Rất đơn giản để ý thì thấy các phần tử của mảng chạy theo index tăng. ta chỉ cần tạo một mảng rỗng mới sau đó cho nó chạy index lùi lại là dc

function reverseArray(arr){
    var outputArray = [];
    for(var i = arr.length-1;i>=0;i--){
        outputArray.push(arr[i]);
    }
    return outputArray;
}
var inputArray = ["Try","my","best"];
var outputArray = reverseArray(inputArray);
console.log(outputArray);