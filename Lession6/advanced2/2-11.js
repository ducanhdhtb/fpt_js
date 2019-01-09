/*  Write a function composeb that takes two binary functions and returns a function that calles them both*/

function composeb(binary1, binary2) {
    return function(x, y, z) {
      return binary2(binary1(x, y), z);
    }
   }