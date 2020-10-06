
// You should implement your task here.

module.exports = function towelSort (matrix) {

  if (matrix == undefined || matrix == 0) {
    return [];
  }

  let sum = [];

  for (let i = 0; i < matrix.length; i++) {
    if (i % 2 == 0) {
      sum.push(matrix[i]);
    } else {
        sum.push(matrix[i].reverse());
    }
  }

  let res = [];

  for (let j = 0; j < sum.length; j++) {
    for (let k = 0; k < sum[j].length; k++) {
      res.push(sum[j][k]);
    }
  }

  return res;
}
