function createMatrix(m,n){
	for(var i = 0; i <= m; i++){
		for(var j = 0; j <= n;j++){
			document.write(`[${i}][${j}] `);
		}
	document.write("<br>");
	}
}