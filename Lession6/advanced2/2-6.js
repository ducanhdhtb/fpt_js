/* 5. Write a function curry that takes a binary function and an agrument, and returns a function that can take a second argument. */

function curry(binary, x) {
    return function(y) {
      return binary(x, y)
    }
  }
  