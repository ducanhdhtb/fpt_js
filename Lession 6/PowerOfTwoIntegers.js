/*
Ý tưởng rất đơn giản hãy thử tất cả các số x
 bắt đầu từ 2 đến căn bậc hai của n (số đã cho).
  Với mỗi x, hãy thử x ^ y trong đó y bắt đầu từ 2 và tăng từng cái một cho đến khi x ^ y trở thành n hoặc lớn hơn n
*/
function PowerOfTwoIntegers(number){
	debugger;
	if(number == 1)
		return true;
	// Try all numbers from 2 to sqrt(n) as base 
    for (var x=2; x<=Math.sqrt(number); x++) 
    { 
        var  y = 2; 
        var p = Math.pow(x, y); 
  
        // Keep increasing y while power 'p' is smaller 
        // than n.  
        while (p<=number && p>0) 
        { 
            if (p==number) 
                return true; 
            y++; 
            p = Math.pow(x, y); 
         } 
    } 
    return false; 
}
console.log(PowerOfTwoIntegers(7));