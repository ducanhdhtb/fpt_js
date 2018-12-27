/*
Ý tưởng của bài toán min
Nếu a < b thì min bằng a còn trường hợp ngược lại a ko nhỏ hơn b thì max bằng b
*/

function min(a, b){
	if (a < b) {
    	return a;
    } else {
    	return b;
    }
}

console.log('-------------Minimum-------------');
console.log(min(0, 10));
console.log(min(0, -10));