 /* 11. Write a limit function that allows a binary function to be called a limited number of times */

 function limit(binary, n) {
    return function(x, y) {
      if (n > 0) {
        n -= 1;
        return binary(x, y);
      }
      return undefined;
    }
 }