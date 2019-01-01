var rotate = function(matrix) {
    // Copy the original matrix
    var origMatrix = matrix.slice();
    for(var i=0; i < matrix.length; i++) {
        // Map each row entry to its rotated value
        var row = matrix[i].map(function(x, j) {
            var k = (matrix.length - 1) - j;
            return origMatrix[k][i];
        });
        matrix[i] = row;
    }
    return matrix;
};
// https://codereview.stackexchange.com/questions/186805/rotate-an-n-%C3%97-n-matrix-90-degrees-clockwise
/* 
function rotate(matrix) {
    let result = [];
    for(let i = 0; i < matrix[0].length; i++) {
        let row = matrix.map(e => e[i]).reverse();
        result.push(row);
    }
    return result;
};
*/