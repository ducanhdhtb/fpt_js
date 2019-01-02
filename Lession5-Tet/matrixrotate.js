/*Ý tưởng 1:
Chuyển hàng đầu tiên thành cột cuối cùng
Chuyển hàng thứ hai thành cột thứ 2 từ phải qua trái*/
/* Y tuong 2 :
  2.1 Reverse mảng
  2.2 Hoán đổi vị trí i,j
*/
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/* var rotate = function(matrix) {
    debugger;
 // reverse the rows
  matrix = matrix.reverse();
  
  // swap the symmetric elements
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
};
console.log(rotate([[1,2],[3,4]]));
*/
function rotateMatrix(matrix){
    debugger;
  var matrix = matrix.reverse();
  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < i; j++) {
      var temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }
  return matrix;
}
console.log(rotateMatrix([[1,2],[3,4]]));