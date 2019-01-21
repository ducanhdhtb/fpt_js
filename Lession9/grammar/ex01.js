var a = 2;

(function IIFE(){
	var a = 3;
	console.log( a );	// 3
})();

console.log( a );		// 2


var a = 2;

{
	let a = 3;
	console.log( a );	// 3
}

console.log( a );		// 2