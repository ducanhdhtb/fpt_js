// 1.Y tuong
//


//
//
//
function swap(a, b){ //a =4, b =5 ;
	var temp = a;
	var a = b;
	var b = temp;
} 
function sort(arr){
	for(var i = 0; i < arr.length - 1; i++){
		for(var j = arr.length - 1;j > i; j--){
			if(arr[j] < arr[j-1]){
				temp = arr[j-1];
			 	arr[j-1] = arr[j];
				arr[j] = temp;
			} 
		}
	}
	return arr;
}
sort([6,3,4,5,7]);