/* 12. Write a from function that producecs a generator that will produce a series of values. */

function from(val) {
    return function() {
      var result = val
      val += 1;
      return result;
    }
   }