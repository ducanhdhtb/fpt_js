// steps:// 1. tao matrix min, matrix max, bang 0 het// 2. chay i = 0 => matrix.length, va j = 0 => matrix[0].length// 3. neu i === 0 => set minMaxtrix[i][j] = maxMatrix[i][j] = matrix[i][j] * matrix[i][j - 1]// 3'. neu j == 0 => minMaxtrix[i][j] = maxMatrix[i][j] = matrix[i][j] * matrix[i - 1][j]// 4. (i > 0, j > 0) minMatrix[i][j] = matrix[i][j] * min(minMatrix[i - 1][j], minMatrix[i][j - 1], maxMatrix[i - 1][j], maxMatrix[j][i -1])// 4. (i > 0, j > 0) maxMatrix[i][j] = matrix[i][j] * min(minMatrix[i - 1][j], minMatrix[i][j - 1], maxMatrix[i - 1][j], maxMatrix[j][i -1])// 5. return Max(minMatrix[i][j], maxMatrix[i][j])function matrixProduct(matrix) {  const n = matrix.length;  const m = matrix[0].length;  const minMatrix = createMatrix(n, m, matrix);  const maxMatrix = createMatrix(n, m, matrix);  for (let i = 1; i < n; i += 1) {    for (let j = 1; j < m; j += 1) {      minMatrix[i][j] = getMinMax(Math.min, matrix, minMatrix, maxMatrix, i, j);      maxMatrix[i][j] = getMinMax(Math.max, matrix, minMatrix, maxMatrix, i, j);    }  }  return Math.max(maxMatrix[n - 1][m - 1], minMatrix[n - 1][m - 1]);}function createMatrix(n, m, matrix) {  const res = Array    .fill(0)    .map(n => []);  for (let i = 0; i < n; i += 1) {    for (let j = 0; j < m; j += 1) {      if (i === 0 && j === 0) {        res[i][j] = matrix[i][j];      } else if (j === 0) {        res[i][j] = matrix[i][j] * res[i - 1][j];      } else if (i === 0) {        res[i][j] = matrix[i][j] * res[i][j - 1];      } else {        res[i][j] = 0;      }    }  }  return res;}function getMinMax(fn, matrix, minMatrix, maxMatrix, i, j) {  return fn(    matrix[i][j] * minMatrix[i - 1][j],    matrix[i][j] * minMatrix[i][j - 1],    matrix[i][j] * maxMatrix[i - 1][j],    matrix[i][j] * maxMatrix[i][j - 1]  );}