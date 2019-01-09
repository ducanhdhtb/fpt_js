/* 7. Write a function twice that takes a binary function and returns a unary function that passes its argument to the binary function twice */

function twice(binary) {
    return function(x) {
      return binary(x, x)
    }
  }