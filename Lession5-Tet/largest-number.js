function largestNumber(num) {
    debugger;
    var NUM = [];
    var res = '';
    
    for (var i = 0; i <num.length; i++) {
        NUM.push(num[i]+''); // ["3", "30", "34", "5", "9"]
    }
 
    / *NUM.sort(function (a, b) { // ["9", "5", "34", "3", "30"]
    console.log(a,b);
        var leftRight = a+b;
        var rightLeft = b+a;
        
        if (leftRight > rightLeft) {
          return -1;
        }
        if (leftRight < rightLeft) {
          return 1;
        }
        return 0;
    });
    */
   function  Compare(X, Y){
        // first append Y at the end of X
        XY = X.append(Y);
    
        // then append X at the end of Y
        YX = Y.append(X);

        // Now see which of the two formed numbers is greater
        if (XY > YX)
        {
            return 1;
        }
        else
        {
            return 0;
        }
        
    }
    NUM.Compare();
 
    for (var i = 0; i < NUM.length; i++) {
        res += NUM[i]; // res = "9534330"
    }
 
    return parseInt(res);
 }
 
 console.log(largestNumber([3, 30, 34, 5, 9])); // 9534330
 console.log(largestNumber([9, 99, 98, 998, 9997]));