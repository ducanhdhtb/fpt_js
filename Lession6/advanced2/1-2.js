function swap(a, b) {
    [a, b] = [b, a];
  }
  
  var x = 1;
  var y = 2;
  
  swap(x, y);
  console.log(x); // ??
  //Khi gia tri cua tham tri truyen vao doi so cua mot ham gia tri cua tham tri se duoc copy