var map = new Map();

var x = { id: 1 },
	y = { id: 2 };

map.set( x, "foo" );
map.set( y, "bar" );

// var keys = [ ...map.keys() ];

//keys[0] === x;					// true
//keys[1] === y;	

//console.log(map.get(x));