function rotateMatrix (matrix) {
  debugger;
  var n = matrix[0].length
  for (var outer = 0; outer < Math.floor(n / 2); outer++) {
    for (var inner = outer; inner < Math.ceil(n/2); inner++) {
      // store current cell in temp var
      var temp = matrix[outer][inner]
      // swap values 
      matrix[outer][inner] = matrix[n-1-inner][outer];
      matrix[n-1-inner][outer] = matrix[n-1-outer][n-1-inner]
      matrix[n-1-outer][n-1-inner] = matrix[inner][n-1-outer]
      matrix[inner][n-1-outer] = temp
        }
    }
  return matrix
}

var matrix = [
                [1,2,3],
                [4,5,6],
                [7,8,9]
              ];
             
rotateMatrix(matrix);