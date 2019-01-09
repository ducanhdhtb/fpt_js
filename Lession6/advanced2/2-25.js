/*  Make a recovable function that takes a binary function, and returns an object containing an invoke function that can invoke the binary function, and a revoke function that disables the invoke function */

function revocable(binary) {
    return {
      invoke: function (x, y) {
        if (binary !== undefined ) {
          return binary(x, y);      
        }
      },
      revoke: function () {
        binary = undefined;
      }
    }
  }