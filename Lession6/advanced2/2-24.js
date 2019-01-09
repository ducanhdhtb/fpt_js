/* 22. Write a counter function that returns an object containing two functions that implement an up/down counter, hiding the counter. */

function counter(count) {
    return {
      up: function () {
        count += 1;
        return count;
      },
      down: function () {
        count -= 1;
        return count;
      }
    };
  }