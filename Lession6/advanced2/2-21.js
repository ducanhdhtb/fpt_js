/*  Make a function gensymf that makes a function that generates unique symbols. */

function gensymf(value) {
    var uniq = from(1);
    return function() {
      return value + uniq();
    }
  }