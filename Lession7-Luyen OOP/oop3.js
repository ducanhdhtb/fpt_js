/*
1. Vector
Xây dựng constructor Vector biểu diễn một vector trong không gian hai chiều, có hai tham số đầu vào là x, y. Xây dựng 2 methods cho Vector prototype là plus và minus như ví dụ sau:

console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// => Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// => Vector{x: -1, y: -1}
*/
function Vector(var _x, var _y){
	this.x = _x;
	this.y = _y;
}

Vector.prototype.plus = function(vector){
	return new Vector(this.x + vector.x, this.y + vector.y);
}

Vector.prototype.minus = function(vector){
	return new Vector(this.x - vector.x, this.y - vector.y);
}

// Test
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
// => Vector{x: 3, y: 5}
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
// => Vector{x: -1, y: -1}
// ****************************************************************
 // 2.interface
 /*
 Định nghĩa hàm logFive với đầu vào là một object. Thực hiện ghi ra log 5 phần tử đầu tiên hoặc ít hơn nếu số phần tử thoả mãn ít hơn 5. Implement object kiểu ArraySeg với đầu vào là một mảng và một object khác kiểu RangeSeq với đầu vào là 2 số nguyên biểu diễn khoảng.

// Your code here.

logFive(new ArraySeq([1, 2]));
// => 1
// => 2
logFive(new RangeSeq(100, 1000));
// => 100
// => 101
// => 102
// => 103
// => 104
*/
function ArraySeq(_array){
    var array = _array.slice();
    var start = 0;
    var end   = array.length - 1;
  
    this.isEmpty = function(){
      return end < start;
    }
  
    this.get = function(idx){
      if(idx >= start && idx <= end)
        return array[idx];
      else
        return "Index invalid!";
    }
  
    this.indexOfTail = function(){
      return end;
    }
  }
  
  function RangeSeq(_st, _ed){
    var base = _st;
    var start = 0;
    var end = _ed - _st;
  
    this.isEmpty = function(){
      return end < start;
    }
  
    this.get = function(idx){
      if(idx >= start && idx <= end)
        return idx + base;
      else
        return "Index invalid!";
    }
  
    this.indexOfTail = function(){
      return end;
    }
  }
  
  function logFive(seq){
    if(!seq.isEmpty()){
      var cnt = 0;
      var idx = 0;
      while(true){
        console.log(seq.get(idx));
        cnt++;
        if(cnt == 5 || idx == seq.indexOfTail()) break;
        idx++;
      }
    }
  }
  
  // test
  logFive(new ArraySeq([1, 2]));
  console.log("---------------");
  logFive(new RangeSeq(100, 1000));