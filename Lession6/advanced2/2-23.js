/* 21. Make a function fibonaccif that reurns a generator that will return the next fibonacci number */

function fibonaccif(x, y) {
    return function() {
      var next = x;
      x = y;
      y += next
  
      return next
    }
  }