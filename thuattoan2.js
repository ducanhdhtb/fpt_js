const arr = [
    [1, 3, 5],
    [2, 6, 9],
    [3, 6, 9]
  ];
  
  const N = arr.length;
  const M = arr[0].length;
  const middleI = Math.floor((N * M) / 2)
  
  let i = 0;
  let min = null;
  let median = null;
  
  while (i++ <= middleI) {
    min = Infinity;
    let minArr = null;
    for (let j = 0; j < N; j++) {
      if (arr[j].length > 0 && arr[j][0] < min) {
        minArr = arr[j];
        min = arr[j][0];
      }
    }
    if (minArr) {
      median = minArr.shift();
    }
  }
  
  console.log('median', median);