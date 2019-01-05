/*
1.Yêu cầu:
Cho một số nguyên dương n, tìm nếu nó có thể được biểu thị dưới dạng x^y
 trong đó y> 1 và x> 0 và x và y đều là hai số nguyên
 
2.Ý tưởng rất đơn giản hãy thử tất cả các số x
 bắt đầu từ 2 đến căn bậc hai của n (số đã cho).
  Với mỗi x, hãy thử x ^ y trong đó y bắt đầu từ 2 và tăng từng cái một cho đến khi x ^ y trở thành n hoặc lớn hơn n
*/
function PowerOfTwoIntegers(number) {
	
	if (number == 1)
	debugger;
		return true;
	// Try all numbers from 2 to sqrt(n) as base 
	for (var x = 2; x <= Math.sqrt(number); x++) {
		var y = 2;
		var p = Math.pow(x, y);

		// Keep increasing y while power 'p' is smaller 
		// than n.  
		while (p <= number && p > 0) {
			if (p == number)
				return true;
			y++;
			p = Math.pow(x, y);
		}
	}
	return false;
}
console.log(PowerOfTwoIntegers(49));


/*
function isPower(number){
	debugger;
	if(number < 2){
		return true;
	}
	for(i = 2;i < Math.sqrt(number); ++i)
	{
		for(j = 2; j <=32;++j){
			if(Math.pow(i,j) == number){
				return true;
			}
		}
	}
}
console.log(isPower(4));
*/
