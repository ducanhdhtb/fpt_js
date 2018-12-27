/*giải thích:

Cho hàng đầu tiên vào result theo thứ tự
Lấy phần tử cuối của mỗi hàng theo thứ tự cho vào result
Đảo ngược hàng cuối cùng rồi cho vào result
Lấy phần tử đầu của các hàng còn lại
Tới đây là đi được vòng ngoài của ma trận, đệ quy tiếp tục với ma trận (m-1)x(n-1)

Bonus cái jsfiddle để chạy code nếu lười (hoặc là mở console panel của trình duyệt ra)*/

"use strict";

function run(input, result) {
		result = result || []
    if (input.length == 0) {
        return result;
    }
    
    if (input.length === 1) {
    		result.push(input[0][0])
        return result
    }

    result = result.concat(input.shift());

    input.forEach(function(rightEnd) {
        result.push(rightEnd.pop());
    });

    result = result.concat(input.pop().reverse());

    var tmp = [];
    input.forEach(function(leftEnd) {    
        tmp.push(leftEnd.shift());
    });
    result = result.concat(tmp.reverse());

    return run(input, result);
}

console.log(
	'3x3', 
  run(
    [[ 1, 2, 3 ],
     [ 4, 5, 6 ],
     [ 7, 8, 9 ]]
  )
)

console.log(
	'4x4', 
  run(
    [[1,  2,   3,  4],
     [5,  6,   7,  8],
     [9,  10, 11, 12],
     [13, 14, 15, 16]]
  )
);