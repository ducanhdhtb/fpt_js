const convert = (s, numRows) => {
  let len = s.length;
  if(len<=2) return s;
  let a = [];
  let row = 0;
  let isDown = true;
  
  for(let i=0; i<len; i++){
    if(!a[row]) {
      a[row] = s.charAt(i);
    } else {
      a[row] += s.charAt(i);
    }
    
    if(row === numRows-1) isDown = false;
    if(row === 0) isDown = true;
    row = isDown ? row + 1 : row - 1;
  }
  
  let len = a.length;
  let newS = '';
  a.forEach(function(element, index){
  	newS += element;
  });
  
  return newS;
}
convert('PAYPALISHIRING',3);