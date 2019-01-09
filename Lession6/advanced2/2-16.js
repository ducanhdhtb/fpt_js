/* 15. Write an element function that takes an array and a generator and returns a generator that will produce elements from the array. */

function element(array, generator) {
    return function() {
      var index = generator()
      if (index !== undefined) {
        return array[index];
      }
    }
  }