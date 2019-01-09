/*  Write a concat function that takes two generators and produces a generator that combines the sequences */

function concat(generator_1, generator_2) {
    return function() {
      var value = generator_1()
      if (value === undefined ) {
        return generator_2()
      }
      return value
    }
  }