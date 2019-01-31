// My function defined
function changeArrIntoWord(arrTest){
    var str = ''
    for (var i = 0; i < arrTest.length; i++) {
        str += arrTest[i];       
    }
    return str;
}

// function zigzag
function zigzag(str, row){
    if(row == 2 ){
        var arr = [];
        var evenArr = [];
        var oddArr = [];
        for (var i = 0; i < str.length; i++) {
            if(i%2 == 0){
                evenArr.push(str[i]);
            }else{
                oddArr.push(str[i]);
            }
        }
        return changeArrIntoWord(evenArr) + changeArrIntoWord(oddArr);
    }else{
        console.log("Thinking...")
    }
 
    
}
 console.log(zigzag("abcd",2));
//  console.log(zigzag('PAYPALISHIRING'));
