/* 3. Write a function addf that adds from two invocations. */

function addf(x) {
    return function(y) {
      return x + y;
    };
  }