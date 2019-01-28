/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    var arr=[];
    arr[0] = "1";
    var count = 1;
    var str = arr[0];
    
    for(var i=1;i<n;i++) {
        //算出arr[i]
        count = 1;
        str = arr[i-1];    //为什么直接arr[i-1][]不行？
        arr[i]="";         //这句arr[i]是undefined
 
            for(var j=0;j<str.length-1;j++){
                if(str[j+1] == str[j]) {
                    count++;
                }else{
                    arr[i]=arr[i]+count+str[j];
                    count = 1;
                }
            }
            arr[i] = arr[i]+count+str[str.length-1];
            
   /*  while循环写法
        var j=0;
        while(str[j+1]){
            if(str[j+1] == str[j]){
                count++;
            }else{
                arr[i] += count+str[j];
                count = 1;
            }

            j++;
        }
        arr[i] += count+str[j];
    */
        
    }
    return arr[n-1];
};
