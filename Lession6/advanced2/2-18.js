/* Write a collect function that takes a generator and an array and produces a function that will collect the results in the array. */

function collect(generator, array) {
    return function() {
      var value = generator();
      if ( value !== undefined ) {
        array.push(value);
      }
      return value
    }
  }