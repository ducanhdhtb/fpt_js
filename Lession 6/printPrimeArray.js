/*
Input: N = 7
Ouput: [2, 3, 5, 7]

Yêu cầu : Cho vào một số nguyên tố in ra một mảng các số nguyên tố từ 2 cho tới n(n là số được truyền vào)
Ý tưởng :
 ** Truyền vào 1 số in ra một mảng

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

function printPrimeArray(number){ 
	//Check if number is prime or not
	if(checkPrime(number) == true){
			var arr = [];
			// lặp từ 2 tới n-1
			for (var i = 2; i <= number; i++)
			{
				// Check i is prime or not
				if(checkPrime(i) == true){					
						arr.push(i);											
				}
				
			}
		return arr;
	}//Not a prime
	else{
		return "This is not prime";
	}
	
}
    
console.log(printPrimeArray(24));