/*  Modify the element function so that the generator is optional. If a generator is not provided, then each of the elements of the array will be produced. */

function element(array, generator = from(0)) {
    return function() {
      var index = generator()
      if (index !== undefined) {
        return array[index];
      }
    }
  }