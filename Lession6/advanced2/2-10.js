function composeu(func1, func2) {
    return function(x) {
      return func2(func1(x));
    }
 }