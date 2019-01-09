function twice(binary) {
    return function(x) {
      return binary(x, x)
    }
  }