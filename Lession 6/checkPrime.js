/*
function inPrime(number){
	if(number > 2)
		return 0;
	for(i = 2; i < Math.sqrt(number);++i)
	{
		if(number%i == 0)
			return 0;
	}
	return 1;
}
*/
/*
Yêu cầu : Kiểm tra 1 số có phải là số nguyên tố  hay không
 ** Số nguyên tố là số chỉ chia hết cho 1 và chính nó 
 ** Ví dụ 7 là số nguyên tố  vì ngoài 1 và 7 nó không chia hết cho số nào hết  -> true
 ** Ví dụ 4 sẽ không phải là số nguyên tố  vì ngoài 1 và chính nó nó còn chia hết cho 2 -> false
Ý tưởng : Sử dụng phép chia lấy dư để xác định đó có phải là số nguyên tố  hay không
*/
/*function inPrime(number){
	if(number == 1 || number == 0){
		return false;
	}
	for(i = 2;i<number-1;i++){
		if(number%i != 0 || number == 2){
			return true;
		}else{
			return false;
		}
	}
	
}
console.log(inPrime(3));
*/
function checkPrime(number)
{
    // Biến cờ hiệu
    var flag = true;
 
    // Nếu n bé hơn 2 tức là không phải số nguyên tố
    if (number < 2){
        flag = false;
    }
    else{
        // lặp từ 2 tới n-1
        for (var i = 2; i < number-1; i++)
        {
            if (number % i == 0){
                flag = false;
                break;
            }
        }
    }
 
    // Kiểm tra biến flag
    if (flag == true){
        return true;
    }
    else{
		return false;
    }
}