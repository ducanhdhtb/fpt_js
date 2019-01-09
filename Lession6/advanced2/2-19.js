/*  Write a filter function that takes a generator and a predicate and produces a generator that produces only the value approved by the predicate */

function filter(generator, predicate) {
    return function() {
      var value;
      do {
        value = generator();
      } while (
        value !== undefined && !predicate(value)
      );
      return value;
    }
  }
