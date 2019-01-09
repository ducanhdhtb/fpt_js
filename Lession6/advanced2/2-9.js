/*  Write reverse, a function that reverses the arguments of a binary function. */

function reverse(binary) {
    return function (x, y) {
      return binary(y, x);
    }
  }